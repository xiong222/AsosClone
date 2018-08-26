import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from '../IconButton';
import styles from './Container.css';

class Container extends Component {
  static propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired
  };

  /* istanbul ignore next */
  componentDidMount() {
    document.addEventListener('keyup', this.handleClose);
  }

  /* istanbul ignore next */
  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleClose);
  }

  handleClose = /* istanbul ignore next */ (e) => {
    const { onClose } = this.props;

    // Escape
    if (e.keyCode === 27) {
      e.preventDefault();
    }

    onClose();
  };

  render() {
    const { children } = this.props;

    return (
      <section className={styles.wrapper}>
        <div className={styles.container}>
          <IconButton
            icon="close"
            onClick={this.handleClose}
            className={styles.close}
          />
          {children}
        </div>
      </section>
    );
  }
}

export default Container;
