import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import ViewAllBlock from "../ViewAllBlock";
import { navigationPropType } from "../../../../state/modules/navigation";
import styles from "./index.css";
import { getMobileTemplate } from "../../../../helpers/navigationTemplatesResolver";

// At the moment only templateId 4 (Inspiration Item) needs transparent background
const COMPONENT_WITH_NO_BACKGROUND = [4];

const hasNoBackground = ({ smallAndMediumTemplateId }) =>
  COMPONENT_WITH_NO_BACKGROUND.includes(smallAndMediumTemplateId);

const cx = classnames.bind(styles);

const ListContainer = ({ item, setNavActiveItem, saveNavigationItem }) => {
  const Component = getMobileTemplate(item.smallAndMediumTemplateId);

  return (
    <ul
      className={cx(styles.container, {
        [styles.container__noBackground]: hasNoBackground(item)
      })}
      data-testid="list-container"
    >
      {item.items.map(item => {
        if (item.type === "aToZBrands") {
          return <ViewAllBlock key={item.id} item={item} />;
        }

        return (
          <Component
            key={item.id}
            item={item}
            setNavActiveItem={setNavActiveItem}
            saveNavigationItem={saveNavigationItem}
          />
        );
      })}
    </ul>
  );
};

ListContainer.propTypes = {
  item: navigationPropType.isRequired,
  setNavActiveItem: PropTypes.func.isRequired,
  saveNavigationItem: PropTypes.func.isRequired
};

export default ListContainer;
