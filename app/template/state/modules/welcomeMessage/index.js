import { RECEIVE_WELCOME_MESSAGE } from "./constants";

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_WELCOME_MESSAGE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
