import PropTypes from 'prop-types';
import React from 'react';
import Dropdown from './Dropdown';
import ClickOutside from '../ClickOutside';
import TabOutside from '../TabOutside';

const returnFocusToWidgetIcon = (e) => {
  e.preventDefault();
  const focusTarget = document.getElementById('accountIcon');
  return focusTarget && focusTarget.focus();
};

const DropdownContainer = ({
  body,
  children,
  close,
  footer,
  header,
  isHidden,
  isOpen,
  name,
  open,
  openComplete,
  closed,
  isKeyboardAccessible
}) => (
  <TabOutside disabled={!isOpen} callback={close}>
    <ClickOutside
      disabled={!isOpen}
      callback={close}
      validPropagationTargets={['#chrome-header', '#chrome-breadcrumb']}
    >
      <Dropdown
        name={name}
        isOpen={isOpen}
        isHidden={isHidden}
        open={open}
        openComplete={openComplete}
        onCloseWithMouse={close}
        onCloseWithKeyboard={(e) => {
          close();
          returnFocusToWidgetIcon(e);
        }}
        header={header}
        body={body}
        footer={footer}
        onTransitionEnd={closed}
        isKeyboardAccessible={isKeyboardAccessible}
      >
        {children}
      </Dropdown>
    </ClickOutside>
  </TabOutside>
);

DropdownContainer.propTypes = {
  body: PropTypes.node,
  children: PropTypes.node,
  close: PropTypes.func,
  footer: PropTypes.node,
  header: PropTypes.node,
  isHidden: PropTypes.bool,
  isOpen: PropTypes.bool,
  name: PropTypes.string.isRequired,
  open: PropTypes.func,
  openComplete: PropTypes.func,
  closed: PropTypes.func,
  isKeyboardAccessible: PropTypes.bool
};

DropdownContainer.defaultProps = {
  closed: PropTypes.func,
  isKeyboardAccessible: true
};

export default DropdownContainer;

