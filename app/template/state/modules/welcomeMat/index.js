import { RECEIVE_WELCOME_MAT } from "./constants";

export { requestWelcomeMat } from "./actions";

export {
  getWelcomeMessage,
  getWelcomeMatRedirectUrl,
  getWelcomeMatCountry,
  getValuePropositionMessages,
  getValueHeader,
  getPaymentOptions,
  getWelcomeText
} from "./selectors";

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_WELCOME_MAT:
      return {
        ...state,
        ...action.payload.data
      };
    default:
      return state;
  }
};
