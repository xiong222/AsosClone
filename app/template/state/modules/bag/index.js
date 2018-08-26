import { createSelector } from "reselect";
import {DEFAULT_STATE} from "../constants";

export const SET_BAG = "SET_BAG";

export const START_REMOVE_BAG_ITEM = "START_REMOVE_BAG_ITEM";
export const FINISH_REMOVE_BAG_ITEM = "FINISH_REMOVE_BAG_ITEM";
export const SHOW_RESERVATION_MESSAGE = "SHOW_RESERVATION_MESSAGE";
export const HIDE_RESERVATION_MESSAGE = "HIDE_RESERVATION_MESSAGE";
export const START_CHECKOUT = "START_CHECKOUT";

export const BAG_ITEM_DELETE_TRANSITION_END = "BAG_ITEM_DELETE_TRANSITION_END";
export const BAG_ERROR = "BAG_ERROR";
export const DISMISS_BAG_ERROR = "DISMISS_BAG_ERROR";
export const SET_LOADING = "SET_LOADING";

export const getBag = state => {
  // state = DEFAULT_STATE;
  return state.bag
};

export const getLoading = createSelector(getBag, ({ loading }) => loading);

export const getBagItems = createSelector(getBag, ({ items }) => items);

export const getBagSummary = createSelector(getBag, ({ summary }) => summary);

export const getTotalPrice = createSelector(
  getBagSummary,
  ({ totalPrice }) => totalPrice || {}
);

export const getTotalPriceText = createSelector(
  getTotalPrice,
  ({ text }) => text
);

export const getTotalQuantity = createSelector(
  getBagSummary,
  ({ totalQuantity }) => totalQuantity
);

export const displayReservationMessage = createSelector(
  getBag,
  ({ displayReservationMessage }) => displayReservationMessage
);

export const bagError = createSelector(getBag, ({ bagError }) => bagError);

export const dismissBagError = () => {
  return dispatch => {
    dispatch({
      type: DISMISS_BAG_ERROR
    });
  };
};

export const getUpdated = createSelector(getBag, ({ isUpdated }) => isUpdated);

export const bagItemDeleteTransitionEnd = itemId => dispatch =>
  dispatch({
    type: BAG_ITEM_DELETE_TRANSITION_END,
    itemId
  });

export const deleteBagItem = bagItem => {
  return dispatch => {
    dispatch({
      type: START_REMOVE_BAG_ITEM,
      item: bagItem
    });
  };
};

export const startCheckout = () => {
  return dispatch => {
    dispatch({
      type: START_CHECKOUT
    });
  };
};

const initialState = {
  summary: {
    totalPrice: {}
  },
  loading: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_BAG: {
      const { bag, messages } = action.payload;
      return {
        ...state,
        ...bag,
        messages,
        bagError: false,
        loading: false
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        loading: true
      };
    }
    case START_REMOVE_BAG_ITEM: {
      return {
        ...state
      };
    }
    case SHOW_RESERVATION_MESSAGE: {
      return {
        ...state,
        displayReservationMessage: true
      };
    }
    case HIDE_RESERVATION_MESSAGE: {
      return {
        ...state,
        displayReservationMessage: false
      };
    }

    case BAG_ERROR: {
      return {
        ...state,
        bagError: true,
        loading: false
      };
    }
    case DISMISS_BAG_ERROR: {
      return {
        ...state,
        bagError: false
      };
    }
    case FINISH_REMOVE_BAG_ITEM: {
      return {
        ...state,
        lastItemRemoved: action.itemId
      };
    }
    default:
      return state;
  }
};


