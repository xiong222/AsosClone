import CircleImageRightItem from "../components/Navigation/SideNavigationContainer/CircleImageRightItem";
import CircleImageLeftItem from "../components/Navigation/SideNavigationContainer/CircleImageLeftItem";
import InspirationItem from "../components/Navigation/SideNavigationContainer/InspirationItem";
import MenuItem from "../components/Navigation/SideNavigationContainer/MenuItem";
import SquareItem from "../components/Navigation/SideNavigationContainer/SquareItem";
import FlatItem from "../components/Navigation/SideNavigationContainer/FlatItem";

import TextList from "../components/Navigation/LargeSecondaryNavigation/TextList";
import MarketingImage from "../components/Navigation/LargeSecondaryNavigation/MarketingImage";
import CircleImageList from "../components/Navigation/LargeSecondaryNavigation/CircleImageList";
import GridCircleImage from "../components/Navigation/LargeSecondaryNavigation/GridCircleImage";
import ImageCardsWithDescription from "../components/Navigation/LargeSecondaryNavigation/ImageCardsWithDescription";

const MOBILE_TEMPLATES = {
  1: MenuItem,
  2: CircleImageRightItem,
  3: CircleImageLeftItem,
  4: InspirationItem,
  6: SquareItem,
  7: FlatItem
};

const DESKTOP_TEMPLATES = {
  1: TextList,
  2: MarketingImage,
  3: MarketingImage,
  4: MarketingImage,
  5: CircleImageList,
  6: GridCircleImage,
  7: ImageCardsWithDescription
};

const getTemplate = (collection, defaultIndex) => index => {
  if (!Number.isInteger(index)) {
    console.warn("no navigation template index to resolve");
  }

  return collection[index] || collection[defaultIndex];
};

export const getMobileTemplate = getTemplate(MOBILE_TEMPLATES, 3);
export const getDesktopTemplate = getTemplate(DESKTOP_TEMPLATES, 1);

