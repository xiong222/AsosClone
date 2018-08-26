import {
  getBagSummary,
  getBag,
  subscribeToUpdates,
  removeItem,
  startCheckout
} from '../../../../client/sdk/bag';
import {
  SET_BAG,
  START_REMOVE_BAG_ITEM,
  FINISH_REMOVE_BAG_ITEM,
  HIDE_RESERVATION_MESSAGE,
  SHOW_RESERVATION_MESSAGE,
  BAG_ERROR,
  SET_LOADING,
  BAG_ITEM_DELETE_TRANSITION_END,
  getBagItems,
  getTotalQuantity,
  START_CHECKOUT
} from '../../modules/bag';
import {
  OPEN_DROPDOWN,
  CLOSE_DROPDOWN,
  MINIBAG,
  getDropdownIsOpen,
  DROPDOWN_CLOSED,
  getDropdownProgrammatic
} from '../../modules/dropdown';

import {
  getDefaultStoreUrl,
  getSecureStoreUrl
} from '../../modules/regionalStore';
import { isFeatureActive } from '../../modules/features';
import { getViewport, SMALL_VIEWPORT } from '../../modules/layout';
import { withParams } from '../../../../helpers/queryString';

const miniBagEnabled = (state) =>
  isFeatureActive(state, 'stc-minibag-dropdown') &&
  getViewport(state) !== SMALL_VIEWPORT;

const withProductLink = (defaultStoreUrl) => (item) =>
  (item.variantId
    ? { ...item, productUrl: `${defaultStoreUrl}prd/${item.variantId}` }
    : item);

const bagWithProductLinks = (bag, getState) => {
  const state = getState();
  const defaultStoreUrl = getDefaultStoreUrl(state);
  return {
    ...bag,
    items: bag.items.map(withProductLink(defaultStoreUrl))
  };
};

let closeMinibagTimerId;

const bagMiddleware = ({ getState, dispatch }) => {
  getBagSummary().then((summary) =>
    dispatch({
      type: SET_BAG,
      payload: { bag: { summary } }
    })
  );

  subscribeToUpdates(({ bag, messages }) => {
    const state = getState();
    const current = getBagItems(state) || [];
    const next = getBagItems({ bag });
    const oldQuantity = getTotalQuantity(state);
    const newQuantity = getTotalQuantity({ bag });

    const removed = current.filter(
      ({ id }) => !next.find((item) => item.id === id)
    );
    const miniBagIsEnabled = miniBagEnabled(state);

    if (miniBagIsEnabled && removed.length) {
      const items = current.map(
        (item) =>
          (removed.find(({ id }) => id === item.id)
            ? { ...item, transition: 'exiting' }
            : item)
      );

      dispatch({
        type: SET_BAG,
        payload: {
          bag: {
            ...bagWithProductLinks({ ...state.bag, items }, getState),
            incoming: bag,
            isUpdated: true,
            summary: {
              totalQuantity: newQuantity
            }
          },
          messages
        }
      });

      return;
    }

    dispatch({
      type: SET_BAG,
      payload: {
        bag: {
          ...bagWithProductLinks(bag, getState),
          isUpdated: true
        },
        messages
      }
    });

    if (!miniBagIsEnabled) {
      return;
    }

    if (newQuantity > oldQuantity) {
      dispatch({
        type: OPEN_DROPDOWN,
        name: MINIBAG,
        programmatic: true
      });

      dispatch({
        type: SHOW_RESERVATION_MESSAGE
      });

      clearTimeout(closeMinibagTimerId);

      closeMinibagTimerId = setTimeout(() => {
        const state = getState();

        const isProgrammatic = getDropdownProgrammatic(state, {
          name: MINIBAG
        });

        if (isProgrammatic) {
          dispatch({
            type: CLOSE_DROPDOWN,
            name: MINIBAG,
            programmatic: true
          });
        }
      }, 3000);
    }
  });

  return (next) => (action) => {
    const state = getState();

    if (!miniBagEnabled(state)) {
      return next(action);
    }

    if (action.type === START_REMOVE_BAG_ITEM) {
      dispatch({
        type: 'DEFER_ACTIONS',
        payload: {
          actionsToDefer: [OPEN_DROPDOWN, CLOSE_DROPDOWN],
          actionToWaitFor: BAG_ITEM_DELETE_TRANSITION_END,
          actionsToCancelOn: [BAG_ERROR]
        }
      });
    }

    if (action.type === START_REMOVE_BAG_ITEM) {
      const items = getBagItems(state);
      const item = items.find(({ id }) => id === action.item);

      removeItem(item.id, item.itemType.toLowerCase())
        .then(() =>
          dispatch({ type: FINISH_REMOVE_BAG_ITEM, itemId: action.item })
        )
        .catch(() => dispatch({ type: BAG_ERROR }));
    }

    if (
      action.type === OPEN_DROPDOWN &&
      action.name === MINIBAG &&
      !action.programmatic
    ) {
      const miniBagDropdownIsOpen = getDropdownIsOpen(state, { name: MINIBAG });

      if (!miniBagDropdownIsOpen) {
        dispatch({ type: SET_LOADING });
        getBag()
          .then(({ bag, messages }) =>
            dispatch({
              type: SET_BAG,
              payload: {
                bag: bagWithProductLinks(bag, getState),
                messages
              }
            })
          )
          .catch(() => dispatch({ type: BAG_ERROR }));
      }
    }

    if (action.type === DROPDOWN_CLOSED && action.name === MINIBAG) {
      dispatch({
        type: HIDE_RESERVATION_MESSAGE
      });

      /* if the dropdown closed after the last item was removed then we still need to update state with the latest items... */
      const incoming = state.bag.incoming;

      if (incoming && incoming.items.length === 0) {
        dispatch({
          type: SET_BAG,
          payload: {
            bag: bagWithProductLinks(
              { ...incoming, incoming: undefined },
              getState
            )
          }
        });
      }
    }

    if (
      action.type === BAG_ITEM_DELETE_TRANSITION_END &&
      action.itemId === state.bag.lastItemRemoved
    ) {
      const incoming = state.bag.incoming;
      const items = getBagItems({ bag: incoming });
      /*
        If the user has deleted the last item in the minibag, then close the bag before updating state so that the dropdown doesn't just vanish.
      */

      if (items.length === 0) {
        dispatch({
          type: CLOSE_DROPDOWN,
          name: MINIBAG
        });
      } else {
        dispatch({
          type: SET_BAG,
          payload: {
            bag: bagWithProductLinks(
              { ...incoming, incoming: undefined },
              getState
            )
          }
        });
      }
    }

    if (action.type === START_CHECKOUT) {
      const state = getState();
      const checkoutLink = getSecureStoreUrl(state);

      startCheckout()
        .then(() => {
          const checkoutUrl = `${checkoutLink}initialise`;
          window.location.replace(
            withParams(checkoutUrl, { ctaref: 'mini bag' })
          );
        })
        .catch(console.err);
    }

    return next(action);
  };
};

export default bagMiddleware;
