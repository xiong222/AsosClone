
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import IconButton from '../IconButton';
import { validate } from '../../../helpers/gesture';
import styles from './index.css';
import { tabIndex } from '../../../helpers/accessibility';

const cx = classnames.bind(styles);
const ESCAPE_KEY = 27;
const ENTER_KEY = 13;
const keyCode = (e) => e.keyCode || e.which;

class Dropdown extends Component {
  state = {
    isOpen: false
  };
  onClick = (e) => validate(e, this.props.open);
  onMouseEnter = (e) => validate(e, this.props.open);
  onMouseLeave = (e) => validate(e, this.props.onCloseWithMouse);
  closeWithMouse = (e) => {
    e.stopPropagation();
    validate(e, this.props.onCloseWithMouse);
  };
  handleKeyDown = (e) => {
    if (keyCode(e) === ESCAPE_KEY) {
      this.props.onCloseWithKeyboard(e);
    }
  };
  handleEnterKeyDown = (e) => {
    if (keyCode(e) === ENTER_KEY) {
      this.props.onCloseWithKeyboard(e);
    }
  };
  /*
    If the Dropdown is conditionally rendered, it may not animate if rendered and opened in the same frame. Using a setTimeout fixes this issue by queuing the enter transition for the next phase.
  */
  componentWillReceiveProps(nextProps) {
    if (!this.props.isOpen && nextProps.isOpen) {
      setTimeout(() => {
        this.setState({
          isOpen: true
        });
      }, 0);
    }
    if (!nextProps.isOpen) {
      this.setState({
        isOpen: false
      });
    }
  }
  render() {
    const {
      body,
      children,
      footer,
      header,
      isHidden,
      isOpen,
      name,
      onTransitionEnd,
      isKeyboardAccessible
    } = this.props;

    const wrapperClassnames = cx(styles.wrapper, {
      [styles.wrapper__open]: this.state.isOpen,
      [styles.wrapper__hidden]: isHidden
    });

    return (
      <div
        id={`${name}Dropdown`}
        className={wrapperClassnames}
        onClick={this.onClick}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onKeyDown={this.handleKeyDown}
        role="presentation"
      >
        {children}
        <div
          className={styles.outerWrapper}
          data-testid={`${name.toLowerCase()}-dropdown`}
        >
          <div className={styles.innerWrapper}>
            <div
              className={styles.slidedown}
              onTransitionEnd={() => {
                if (!isOpen) {
                  this.body.scrollTop = 0;
                  onTransitionEnd();
                }
              }}
            >
              <div className={styles.header}>
                {header && React.cloneElement(header, { focusable: isOpen })}
                <IconButton
                  icon="close"
                  onClick={this.closeWithMouse}
                  onKeyDown={this.handleEnterKeyDown}
                  className={styles.close}
                  tabIndex={tabIndex(isKeyboardAccessible && isOpen)}
                  data-testid={`${name.toLowerCase()}-close-btn`}
                />
              </div>
              <div className={styles.body} ref={(el) => (this.body = el)}>
                {body &&
                React.cloneElement(body, {
                  focusable: isOpen,
                  queryParams: { nlid: 'nav header' }
                })}
              </div>
              {footer && (
                <div className={styles.footer}>
                  {React.cloneElement(footer, { focusable: isOpen })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dropdown.propTypes = {
  body: PropTypes.element,
  children: PropTypes.node,
  footer: PropTypes.element,
  header: PropTypes.element,
  isHidden: PropTypes.bool,
  isOpen: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onCloseWithKeyboard: PropTypes.func,
  onCloseWithMouse: PropTypes.func,
  open: PropTypes.func,
  onTransitionEnd: PropTypes.func.isRequired,
  isKeyboardAccessible: PropTypes.bool
};

export default Dropdown;

