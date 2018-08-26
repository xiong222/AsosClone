import { GET_SAVED_ITEMS } from "./constants";

export { getItems, hasSavedItems } from "./selectors";
export { getSavedItemsFromSDK } from "./actions";

const initialState = {
  items: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SAVED_ITEMS:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};
