import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import Spinner from '../Spinner';
import styles from './index.css';

const cx = classnames.bind(styles);

const Button = ({
  children,
  hasInvertedSize,
  hasSpinner,
  href,
  theme,
  type,
  ...rest
}) => {
  const tag = href ? 'a' : 'button';
  const className = cx('button', {
    button__hasInvertedSize: hasInvertedSize,
    button__isPrimary: theme === 'primary',
    button__isSecondary: theme === 'secondary',
    button__isTertiary: theme === 'tertiary',
    button__isGreen: theme === 'green'
  });

  const content = (
    <Fragment>
      <span
        className={cx('content', {
          content__isHidden: hasSpinner
        })}
      >
        {children}
      </span>
      {hasSpinner && (
        <span className={styles.spinner}>
          <Spinner size="small" />
        </span>
      )}
    </Fragment>
  );

  return React.createElement(tag, {
    ...rest, className, href, type
  }, content);
};

Button.propTypes = {
  children: PropTypes.node,
  hasInvertedSize: PropTypes.bool,
  hasSpinner: PropTypes.bool,
  href: PropTypes.string,
  theme: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'green']),
  type: PropTypes.string
};

Button.defaultProps = {
  type: 'button'
};

export default Button;

