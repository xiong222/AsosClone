import { createSelector } from "reselect";

const getCountrySelector = state => state.countrySelector;

export const getCountrySelectorVisibility = createSelector(
  getCountrySelector,
  countrySelector => countrySelector.isOpen
);

export const getCountrySelectorLoading = createSelector(
  getCountrySelector,
  countrySelector => countrySelector.isLoading
);

export const getCountrySelectorError = createSelector(
  getCountrySelector,
  countrySelector => countrySelector.error
);

export const getCountrySelectorCountry = createSelector(
  getCountrySelector,
  countrySelector => countrySelector.country
);

export const getCountrySelectorAlternateUrls = createSelector(
  getCountrySelector,
  countrySelector => countrySelector.alternateUrls
);

export const getHasVoucherError = createSelector(
  getCountrySelector,
  countrySelector => countrySelector.hasVoucherError
);

export const getHasSetCurrencyError = createSelector(
  getCountrySelector,
  countrySelector => countrySelector.hasSetCurrencyError
);
