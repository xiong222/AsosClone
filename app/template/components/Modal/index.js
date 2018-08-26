import React, { Component } from "react";
import PropTypes from "prop-types";
import Backdrop from "./Backdrop";
import Container from "./Container";
import Fade from "./Fade";

class Modal extends Component {
  handleClose = /* istanbul ignore next */ () => {
    const { onClose } = this.props;

    if (onClose) {
      onClose();
    }
  };

  render() {
    const { children, isOpen } = this.props;

    return (
      <Fade isActive={isOpen}>
        <Backdrop />
        <Container onClose={this.handleClose}>{children}</Container>
      </Fade>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
};

export default Modal;
