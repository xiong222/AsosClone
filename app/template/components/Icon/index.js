import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './index.css';

const iconSVGData = require('../../styles/icons/index.js');

const Icon = ({ icon, size, ...props }) => {
  // const svg = require(`../../styles/icons/${icon}.svg`);
  // console.log(svg);
  return (
    <span
      {...props}
      className={classnames(styles.container, styles[size])}
      dangerouslySetInnerHTML={{ __html: iconSVGData[icon] }}
    />
  );
};

Icon.defaultProps = {
  size: 'medium'
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium'])
};

export default Icon;
