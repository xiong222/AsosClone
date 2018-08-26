import React, { Component } from "react";
import PropTypes from "prop-types";

const TAB_KEY = 9;

class TabOutside extends Component {
  componentDidMount() {
    document.addEventListener("keyup", this.handler, true);
  }
  handler = e => {
    const { disabled, callback } = this.props;

    if (disabled) {
      return;
    }

    const el = this.el;
    const { target } = e;
    const key = e.keyCode || e.which;

    if (key !== TAB_KEY) {
      return;
    }

    if (target === el || el.contains(target)) {
      return;
    }

    callback(e);
  };
  componentWillUnmount() {
    document.removeEventListener("keyup", this.handler);
  }
  render() {
    return (
      <div
        ref={el => {
          this.el = el;
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

TabOutside.propTypes = {
  disabled: PropTypes.bool,
  callback: PropTypes.func,
  children: PropTypes.node
};

export default TabOutside;
