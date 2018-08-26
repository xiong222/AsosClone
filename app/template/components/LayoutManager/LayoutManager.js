import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  SMALL_VIEWPORT,
  MEDIUM_VIEWPORT,
  LARGE_VIEWPORT
} from '../../state/modules/layout';

const MEDIUM_VIEWPORT_MEDIA = '(min-width: 768px)';
const LARGE_VIEWPORT_MEDIA = '(min-width: 1024px)';

export default class LayoutManager extends Component {
  static propTypes = {
    updateViewportCategory: PropTypes.func.isRequired,
    closeSidePanel: PropTypes.func.isRequired,
    viewportCategory: PropTypes.oneOf([
      SMALL_VIEWPORT,
      MEDIUM_VIEWPORT,
      LARGE_VIEWPORT
    ]).isRequired
  };

  watchers = {};

  componentDidMount() {
    this.watchers.medium = window.matchMedia(MEDIUM_VIEWPORT_MEDIA);
    this.watchers.large = window.matchMedia(LARGE_VIEWPORT_MEDIA);
    setTimeout(() => {
      // don't change state too early
      // if not, we will get warning
      // in react if the user has a different
      // viewport as expected
      this.onResize();
    }, 0);
    this.watchers.medium.addListener(this.onResize);
    this.watchers.large.addListener(this.onResize);
  }

  componentWillUnmount() {
    const { medium, large } = this.watchers;
    medium.removeListener(this.onResize);
    large.removeListener(this.onResize);
  }

  onResize = () => {
    const { medium, large } = this.watchers;
    const { updateViewportCategory, closeSidePanel } = this.props;

    if (large.matches) {
      updateViewportCategory(LARGE_VIEWPORT);
      closeSidePanel();
    } else if (medium.matches) {
      updateViewportCategory(MEDIUM_VIEWPORT);
    } else {
      updateViewportCategory(SMALL_VIEWPORT);
    }
  };

  render() {
    return null;
  }
}
