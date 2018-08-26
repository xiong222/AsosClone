import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  SMALL_VIEWPORT,
  MEDIUM_VIEWPORT,
  LARGE_VIEWPORT,
  getViewport
} from '../../state/modules/layout';

const viewportsPropType = PropTypes.oneOf([
  SMALL_VIEWPORT,
  MEDIUM_VIEWPORT,
  LARGE_VIEWPORT
]);

function withViewport(WrappedComponent) {
  const ComposedComponent = ({ viewable = [], viewportCategory, ...rest }) => {
    if (!viewable.length || viewable.includes(viewportCategory)) {
      return <WrappedComponent isVisible {...rest} />;
    }

    return null;
  };

  ComposedComponent.displayName = `withViewport(${WrappedComponent.displayName ||
  WrappedComponent.name})`;
  ComposedComponent.propTypes = {
    viewable: PropTypes.arrayOf(viewportsPropType),
    viewportCategory: viewportsPropType.isRequired
  };

  function mapStateToProps(state) {
    return {
      viewportCategory: getViewport(state)
    };
  }

  return connect(mapStateToProps)(ComposedComponent);
}

export default withViewport;
