import {
  OPEN_COUNTRY_SELECTOR,
  CLOSE_COUNTRY_SELECTOR,
  SET_COUNTRY,
  LOAD_COUNTRY,
  LOAD_CURRENCY,
  SET_CURRENCY,
  VOUCHER_CURRENCY_ERROR
} from "./constants";
import {DEFAULT_STATE} from "../constants";

export {
  openCountrySelector,
  closeCountrySelector,
  setCountry,
  updatePreferences
} from "./actions";
export {
  getCountrySelectorAlternateUrls,
  getCountrySelectorCountry,
  getCountrySelectorError,
  getCountrySelectorLoading,
  getCountrySelectorVisibility,
  getHasSetCurrencyError,
  getHasVoucherError
} from "./selectors";

const initialState = {
  isOpen: false,
  isLoading: true,
  hasVoucherError: false,
  hasSetCurrencyError: false
};

export const hasVoucherError = messages =>
  !!(
    messages &&
    messages.some(
      ({ errorCode }) =>
        errorCode && errorCode.toLowerCase() === VOUCHER_CURRENCY_ERROR
    )
  );

export default (state = initialState, action) => {
  // state = DEFAULT_STATE;

  switch (action.type) {
    case OPEN_COUNTRY_SELECTOR:
      return {
        ...state,
        isOpen: true,
        isLoading: true,
        hasVoucherError: false,
        hasSetCurrencyError: false
      };
    case CLOSE_COUNTRY_SELECTOR:
      return {
        ...state,
        isOpen: false
      };
    case LOAD_COUNTRY:
      return { ...state, isLoading: true };
    case SET_COUNTRY:
      return {
        ...state,
        country: !action.error ? action.payload : null,
        isLoading: false,
        error: action.error,
        isOpen: !action.error
      };
    case LOAD_CURRENCY:
      return { ...state, isLoading: true };
    case SET_CURRENCY:
      return {
        ...state,
        isLoading: false,
        hasSetCurrencyError: action.error,
        hasVoucherError: hasVoucherError(action.payload)
      };
    default:
      return state;
  }
};

