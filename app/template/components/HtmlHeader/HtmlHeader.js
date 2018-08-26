import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  SMALL_VIEWPORT,
  LARGE_VIEWPORT,
  MEDIUM_VIEWPORT
} from "../../state/modules/layout";
import MiscBar from "../MiscBar";
import Header from "../Header";
import LargeNavigation from "../Navigation/LargeNavigation";
import SidePanel from "../Navigation/SidePanel";
import CookieDisclaimer from "../Header/CookieDisclaimer";
import UnsupportedBrowser from "../UnsupportedBrowserMessage";
import LayoutManager from "../LayoutManager";
import NotQuiteStickyHeader from "../NotQuiteStickyHeader";
import GlobalBannerContentAPI from "../GlobalBannerContentAPI";
import GDPR from "../GDPR";

import CountrySelector from "../CountrySelector";
import "./HtmlHeader.css";

class HtmlHeader extends Component {
  static propTypes = {
    viewport: PropTypes.string.isRequired
  };

  render() {
    const { viewport } = this.props;

    return (
      <header>
        <LayoutManager />
        <CookieDisclaimer />
        <UnsupportedBrowser />
        <MiscBar viewable={[LARGE_VIEWPORT]} />
        <NotQuiteStickyHeader>
          <Header />
          {viewport === LARGE_VIEWPORT ? <LargeNavigation /> : null}
        </NotQuiteStickyHeader>
        {[SMALL_VIEWPORT, MEDIUM_VIEWPORT].includes(viewport) ? (
          <SidePanel viewable={[SMALL_VIEWPORT, MEDIUM_VIEWPORT]} />
        ) : null}
        <GDPR />
        <GlobalBannerContentAPI viewable={[LARGE_VIEWPORT, MEDIUM_VIEWPORT]} />
        <CountrySelector />
      </header>
    );
  }
}

export default HtmlHeader;
