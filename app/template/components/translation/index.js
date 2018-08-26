import React from 'react';
import PropTypes from 'prop-types';
import { addLanguage } from './addLanguage';
import { buildTranslationFormatter } from './buildTranslationFormatter';

const withTranslation = (Component) => {
  const ComposedComponent = ({ language, ...props }) => (
    <Component
      {...props}
      formatTranslation={buildTranslationFormatter(language)}
    />
  );

  ComposedComponent.propTypes = {
    language: PropTypes.string
  };
  ComposedComponent.displayName = `withTranslation(${Component.displayName ||
  Component.name ||
  'Component'})`;
  ComposedComponent.WrappedComponent = Component;
  ComposedComponent.initActions = Component.initActions;

  return addLanguage(ComposedComponent);
};

export default withTranslation;
