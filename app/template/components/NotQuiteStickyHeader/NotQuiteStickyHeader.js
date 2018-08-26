import React, { PureComponent } from "react";
import Headroom from "react-headroom";
import PropTypes from "prop-types";
import {
  viewportPropType,
  LARGE_VIEWPORT,
  MEDIUM_VIEWPORT,
  SMALL_VIEWPORT
} from "../../state/modules/layout";
import classNames from "classnames/bind";
import styles from "./NotQuiteStickyHeader.css";
import emitter from "../../../helpers/events";

const cx = classNames.bind(styles);

const getCookieMessageOffset = (open, viewport) => {
  if (!open) return 0;

  const offsets = {
    [LARGE_VIEWPORT]: 50,
    [MEDIUM_VIEWPORT]: 70,
    [SMALL_VIEWPORT]: 105
  };

  return offsets[viewport];
};

export default class NotQuiteStickyHeader extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    viewportCategory: viewportPropType,
    isSidePanelOpen: PropTypes.bool.isRequired,
    cookieMessageOpen: PropTypes.bool.isRequired
  };

  getPinStart = () => {
    const cookieMessageOffset = getCookieMessageOffset(
      this.props.cookieMessageOpen,
      this.props.viewportCategory
    );
    const miscBarHeight =
      this.props.viewportCategory === LARGE_VIEWPORT ? 30 : 0;

    return cookieMessageOffset + miscBarHeight;
  };

  updateHeadRoom = () => {
    this.headroom && this.headroom.handleResize();
  };

  componentDidMount() {
    this.updateHeadRoom();
    emitter.addListener("sc-sticky-header-update", this.updateHeadRoom);
  }

  render() {
    return (
      <Headroom
        className={cx("stickyHeader", {
          stickyHeader__sidePanelOpen: this.props.isSidePanelOpen
        })}
        disableInlineStyles={true}
        pinStart={this.getPinStart()}
        id="chrome-sticky-header"
        upTolerance={17}
        ref={d => (this.headroom = d)}
      >
        {this.props.children}
        <div id="sc-sticky-header-portal" />
      </Headroom>
    );
  }
}
