/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import classnames from 'classnames';
import styles from './index.css';

const cx = classnames.bind(styles);

class IconButton extends Component {
  icon = () => (
    <Icon
      style={this.props.iconStyles || {}}
      icon={this.props.icon}
      size={this.props.size}
    />
  );

  classes = () => cx(styles.button, this.props.className);

  button = (props) => (
    <button type="button" {...props} className={this.classes()}>
      {this.icon()}
    </button>
  );

  label = (props) => (
    <label {...props} className={this.classes()}>
      {this.icon()}
    </label>
  );

  link = (props) => (
    <a {...props} className={this.classes()}>
      {this.icon()}
      {this.props.children}
    </a>
  );

  render() {
    const p = Object.assign({}, this.props);

    if (p.iconStyles) {
      delete p.iconStyles;
    }
    switch (this.props.type) {
      case 'a':
        return this.link(p);
      case 'label':
        return this.label(p);
      case 'button':
      default:
        return this.button(p);
    }
  }

  static propTypes = {
    icon: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['a', 'button', 'label']),
    className: PropTypes.string,
    children: PropTypes.node,
    iconStyles: PropTypes.object,
    size: PropTypes.oneOf(['small', 'medium'])
  };

  static defaultProps = {
    type: 'button'
  };
}

export default IconButton;
