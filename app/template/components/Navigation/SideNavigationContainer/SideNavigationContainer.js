import React from 'react';
import PropTypes from 'prop-types';
import ListContainer from './ListContainer';
import { navigationPropType } from '../../../state/modules/navigation';
import CarouselContainer from './CarouselContainer';
import styles from './index.css';

const sideNavigationContainers = {
  list: ListContainer,
  carousel: CarouselContainer
};

const renderTitle = (label, styleType) =>
  (label && styleType !== 'noTitle' ? (
    <h3 className={styles.title}>{label}</h3>
  ) : null);

const SideNavigationContainer = ({
  setNavActiveItem,
  saveNavigationItem,
  item
}) => {
  const isValidLayout = sideNavigationContainers.hasOwnProperty(
    item.smallAndMediumLayout
  );

  const Container = isValidLayout
    ? sideNavigationContainers[item.smallAndMediumLayout]
    : ListContainer;

  if (!item.items || !item.items.length) {
    return null;
  }

  return (
    <div className={styles.listContainer}>
      {renderTitle(item.label, item.smallAndMediumStyleType)}
      <Container
        setNavActiveItem={setNavActiveItem}
        saveNavigationItem={saveNavigationItem}
        item={item}
      />
    </div>
  );
};

SideNavigationContainer.propTypes = {
  setNavActiveItem: PropTypes.func.isRequired,
  item: navigationPropType.isRequired,
  saveNavigationItem: PropTypes.func
};

SideNavigationContainer.defaultProps = {
  saveNavigationItem: /* istanbul ignore next */ () => {}
};

export default SideNavigationContainer;
