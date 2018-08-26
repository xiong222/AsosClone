import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Container.css";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

class Container extends Component {
  static propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
    withError: PropTypes.bool,
    isLoading: PropTypes.bool
  };

  static childContextTypes = {
    showWarning: PropTypes.func
  };

  state = { warningShowing: true };

  getChildContext() {
    return {
      showWarning: this.showWarning.bind(this)
    };
  }

  /* istanbul ignore next */
  componentDidMount() {
    document.addEventListener("keyup", this.handleClose);
  }

  /* istanbul ignore next */
  componentWillUnmount() {
    document.removeEventListener("keyup", this.handleClose);
  }

  handleClose = /* istanbul ignore next */ e => {
    const { onClose } = this.props;

    // Escape
    if (e.keyCode === 27) {
      e.preventDefault();
      onClose();
    }
  };

  showWarning(isShowing) {
    if (isShowing) this.wrapper.scrollTop = this.wrapper.scrollHeight;
    this.setState({
      warningShowing: isShowing
    });
  }

  render() {
    const { children } = this.props;

    return (
      <div className={styles.wrapper} ref={el => (this.wrapper = el)}>
        <div
          className={cx([styles.container], {
            [styles.container__withError]: this.props.withError,
            [styles.container__notLoading]: !this.props.isLoading
          })}
        >
          {children}
        </div>
      </div>
    );
  }
}

export default Container;



// WEBPACK FOOTER //
// ./template/components/CountrySelector/Container.js
