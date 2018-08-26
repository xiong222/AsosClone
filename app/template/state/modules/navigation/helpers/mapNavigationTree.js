import orderBy from "lodash/orderBy";
import { LARGE_VIEWPORT } from "../../layout";

const sort = (items, viewport) =>
  viewport === LARGE_VIEWPORT
    ? orderBy(items, ["largeScreenPriority"], ["desc"])
    : items;

const shouldExcludeForViewport = (item, viewport) =>
  item.excludes.includes(viewport);

const filterTreeByViewport = (tree, forViewport) =>
  sort(
    tree.reduce((filteredTree, item) => {
      if (shouldExcludeForViewport(item, forViewport)) {
        return filteredTree;
      }
      filteredTree.push({
        ...item,
        items: sort(filterTreeByViewport(item.items, forViewport), forViewport)
      });
      return filteredTree;
    }, []),
    forViewport
  );

export const mapSidePrimaryNavigationForViewport = (tree, forViewport) =>
  filterTreeByViewport(tree, forViewport);

export const mapLargePrimaryNavigation = tree =>
  mapSidePrimaryNavigationForViewport(tree, LARGE_VIEWPORT).reduce(
    (items, secondLevelItems) => items.concat(secondLevelItems.items),
    []
  );
