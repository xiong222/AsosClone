import React, { Component } from "react";
import PropTypes from "prop-types";

class ClickOutside extends Component {
  componentDidMount() {
    document.addEventListener("click", this.handler, true);
    document.addEventListener("touchend", this.handler, true);
    this.validPropagationTargets = (this.props.validPropagationTargets || [])
      .map(selector => document.querySelector(selector))
      .filter(v => v);
  }
  handler = e => {
    const { disabled, callback } = this.props;

    if (!this.el || disabled) {
      return;
    }

    const el = this.el;
    const { target } = e;

    if (target === el || el.contains(target)) {
      return;
    }

    callback(e);

    if (this.validPropagationTargets.find(t => t && t.contains(target))) {
      return;
    }

    e.preventDefault();
    e.stopPropagation();
  };
  componentWillUnmount() {
    document.removeEventListener("click", this.handler);
    document.removeEventListener("touchend", this.handler);
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

ClickOutside.propTypes = {
  disabled: PropTypes.bool,
  callback: PropTypes.func,
  children: PropTypes.node,
  validPropagationTargets: PropTypes.array
};

export default ClickOutside;

