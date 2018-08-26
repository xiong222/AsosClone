import { createSelector } from "reselect";
import {
  mapLargePrimaryNavigation,
  mapSidePrimaryNavigationForViewport
} from "./helpers/mapNavigationTree";
import { getViewport } from "../layout";
import { WOMEN_FLOOR_ALIAS, MEN_FLOOR_ALIAS } from "./constants";

const selectFemaleNavigationTree = state => {
  const femaleNav = state.navigation.tree.find(
    item => item.alias === WOMEN_FLOOR_ALIAS
  );
  if (femaleNav && femaleNav.items) {
    return femaleNav.items;
  }

  return [];
};

const selectMaleNavigationTree = state => {

  const maleNav = state.navigation.tree.find(
    item => item.alias === MEN_FLOOR_ALIAS
  );
  if (maleNav && maleNav.items) {
    return maleNav.items;
  }

  return [];
};

const selectNavActiveItem = state => state.navigation.activeNavItem;
const selectFooterLinks = state => (state.navigation.footer);
//   [{"id":"bf83f496-32c3-4a13-99e4-03591f384ff0","alias":null,"label":"Help & Information","subtitle":null,"type":"container","labelPath":[null,"Help & Information"],"gender":null,"excludes":[],"largeScreenPriority":0,"largeScreenColumnSpan":1,"largeScreenTemplateId":0,"smallAndMediumTemplateId":0,"smallAndMediumLayout":"list","smallAndMediumImageUrl":null,"largeScreenImageUrl":null,"largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[{"id":"cae1c77d-03dc-4576-9d56-f79a6107b616","alias":null,"label":"Help","subtitle":null,"link":"http://www.asos.com/customer-service/customer-care/help/?help=/app/home","linkType":"internal","type":"link","labelPath":[null,"Help & Information","Help"],"gender":null,"excludes":[],"largeScreenPriority":0,"smallAndMediumImageUrl":null,"largeScreenImageUrl":null,"largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[]},{"id":"943dcfe2-0f7d-462c-aa87-49551dc11582","alias":"track_my_order","label":"Track Order","subtitle":null,"link":"https://my.asos.com/my-account/orders","linkType":"internal","type":"link","labelPath":[null,"Help & Information","Track Order"],"gender":"track_my_order","excludes":[],"largeScreenPriority":0,"smallAndMediumImageUrl":null,"largeScreenImageUrl":null,"largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[]},{"id":"cdde35c1-8dc6-4155-be76-5375557cc130","alias":null,"label":"Delivery & Returns","subtitle":null,"link":"http://www.asos.com/customer-service/delivery/","linkType":"internal","type":"link","labelPath":[null,"Help & Information","Delivery & Returns"],"gender":null,"excludes":[],"largeScreenPriority":0,"smallAndMediumImageUrl":null,"largeScreenImageUrl":null,"largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[]},{"id":"b8153015-5677-4868-ba6f-f62d7acb0b76","alias":null,"label":"10% Student Discount","subtitle":null,"link":"http://www.asos.com/discover/students/unidays/","linkType":"internal","type":"link","labelPath":[null,"Help & Information","10% Student Discount"],"gender":null,"excludes":[],"largeScreenPriority":0,"smallAndMediumImageUrl":null,"largeScreenImageUrl":null,"largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[]}]},{"id":"40c844fa-6ad4-405f-acba-2e7da3f29601","alias":null,"label":"About ASOS","subtitle":null,"type":"container","labelPath":[null,"About ASOS"],"gender":null,"excludes":[],"largeScreenPriority":0,"largeScreenColumnSpan":1,"largeScreenTemplateId":0,"smallAndMediumTemplateId":0,"smallAndMediumLayout":"list","smallAndMediumImageUrl":null,"largeScreenImageUrl":null,"largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[{"id":"53efc998-db49-4cc7-a581-a778493c8025","alias":null,"label":"About Us","subtitle":null,"link":"http://www.asos.com/about/","linkType":"internal","type":"link","labelPath":[null,"About ASOS","About Us"],"gender":null,"excludes":[],"largeScreenPriority":0,"smallAndMediumImageUrl":null,"largeScreenImageUrl":null,"largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[]},{"id":"cf11aaa6-e505-4786-b8c8-365831b8f44f","alias":null,"label":"Careers at ASOS","subtitle":null,"link":"https://asoscareers.asos.com/","linkType":"external","type":"link","labelPath":[null,"About ASOS","Careers at ASOS"],"gender":null,"excludes":[],"largeScreenPriority":0,"smallAndMediumImageUrl":null,"largeScreenImageUrl":null,"largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[]},{"id":"a6ae2b02-2054-4ba5-b148-e6a30d99101d","alias":null,"label":"Corporate Responsibility","subtitle":null,"link":"https://www.asosplc.com/corporate-responsibility.aspx","linkType":"external","type":"link","labelPath":[null,"About ASOS","Corporate Responsibility"],"gender":null,"excludes":[],"largeScreenPriority":0,"smallAndMediumImageUrl":null,"largeScreenImageUrl":null,"largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[]},{"id":"84eb9f88-75aa-4d44-805b-b4788a8b4631","alias":null,"label":"Investors Site","subtitle":null,"link":"https://www.asosplc.com/","linkType":"external","type":"link","labelPath":[null,"About ASOS","Investors Site"],"gender":null,"excludes":[],"largeScreenPriority":0,"smallAndMediumImageUrl":null,"largeScreenImageUrl":null,"largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[]}]},{"id":"4f996f67-d7dc-4271-844d-afd81294e500","alias":null,"label":"More From ASOS","subtitle":null,"type":"container","labelPath":[null,"More From ASOS"],"gender":null,"excludes":[],"largeScreenPriority":0,"largeScreenColumnSpan":1,"largeScreenTemplateId":0,"smallAndMediumTemplateId":0,"smallAndMediumLayout":"list","smallAndMediumImageUrl":null,"largeScreenImageUrl":null,"largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[{"id":"10511d26-bbd4-46d4-827b-850f5ebf4f3f","alias":null,"label":"Mobile and ASOS Apps","subtitle":null,"link":"http://www.asos.com/discover/our-apps/","linkType":"internal","type":"link","labelPath":[null,"More From ASOS","Mobile and ASOS Apps"],"gender":null,"excludes":[],"largeScreenPriority":0,"smallAndMediumImageUrl":null,"largeScreenImageUrl":null,"largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[]},{"id":"dea39e4a-46db-45a5-b437-9cd24cca7eef","alias":null,"label":"ASOS Marketplace","subtitle":null,"link":"https://marketplace.asos.com/","linkType":"external","type":"link","labelPath":[null,"More From ASOS","ASOS Marketplace"],"gender":null,"excludes":[],"largeScreenPriority":0,"smallAndMediumImageUrl":null,"largeScreenImageUrl":null,"largeScreenStyleType":"dark","smallAndMediumStyleType":"dark","items":[]}]}]
// ) /*state.navigation.footer*/;

export const femaleLargePrimaryNavigationItems = createSelector(
  selectFemaleNavigationTree,
  mapLargePrimaryNavigation
);

export const maleLargePrimaryNavigationItems = createSelector(
  selectMaleNavigationTree,
  mapLargePrimaryNavigation
);

export const femaleSidePrimaryNavigationItems = createSelector(
  selectFemaleNavigationTree,
  getViewport,
  mapSidePrimaryNavigationForViewport
);

export const maleSidePrimaryNavigationItems = createSelector(
  selectMaleNavigationTree,
  getViewport,
  mapSidePrimaryNavigationForViewport
);

export const getNavActiveItem = createSelector(selectNavActiveItem, id => id);

export const footerNavigation = createSelector(
  selectFooterLinks,
  footer => footer
);



// WEBPACK FOOTER //
// ./template/state/modules/navigation/selectors.js
