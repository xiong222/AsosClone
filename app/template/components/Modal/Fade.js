import React, { Component } from "react";
import PropTypes from "prop-types";
import CSSTransition from "react-transition-group/CSSTransition";
import cx from "classnames";
import styles from "./Fade.css";
import DeviceDetection from "../../../helpers/deviceDetection";

class Fade extends Component {
  // HACK: iOS 10 and below do not like fixed with forms
  y: 0;

  deviceDetection = new DeviceDetection();

  handleEnter = /* istanbul ignore next */ () => {
    this.y = window.scrollY;
    scrollTo(0, 0);

    document.body.classList.add("chrome-bodylock");
  };

  handleExit = /* istanbul ignore next */ () => {
    document.body.classList.remove("chrome-bodylock");

    scrollTo(0, this.y);
  };
  // end

  render() {
    const { isActive, children } = this.props;

    return (
      <CSSTransition
        in={isActive}
        mountOnEnter={true}
        unmountOnExit={true}
        timeout={300}
        onEnter={this.handleEnter}
        onExited={this.handleExit}
        classNames={{
          enter: styles.fade__entered,
          enterActive: styles.fade__entering,
          exit: styles.fade__exited,
          exitActive: styles.fade__exiting
        }}
      >
        <div
          className={cx(styles.fade, {
            [styles.isAndroid]: this.deviceDetection.isAndroidChrome(),
            [styles.isIos]: this.deviceDetection.isIos()
          })}
        >
          {children}
        </div>
      </CSSTransition>
    );
  }
}

Fade.defaultProps = {
  isActive: false
};

Fade.propTypes = {
  isActive: PropTypes.bool,
  children: PropTypes.node
};

export default Fade;
