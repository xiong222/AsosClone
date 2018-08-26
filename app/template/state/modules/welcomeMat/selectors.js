import { createSelector } from "reselect";

const getWelcomeMat = state => state.welcomeMat;

export const getWelcomeMessage = createSelector(
  getWelcomeMat,
  welcomeMat => welcomeMat.text
);

export const getWelcomeMatRedirectUrl = createSelector(
  getWelcomeMat,
  welcomeMat => welcomeMat.redirectUrl
);

export const getWelcomeMatCountry = createSelector(
  getWelcomeMat,
  welcomeMat => welcomeMat.country
);

export const getValuePropositionMessages = createSelector(
  getWelcomeMat,
  welcomeMat => welcomeMat.messages
);

export const getValueHeader = createSelector(
  getWelcomeMat,
  welcomeMat => welcomeMat.valueHeader
);

export const getPaymentOptions = createSelector(
  getWelcomeMat,
  welcomeMat => welcomeMat.paymentProviders
);

export const getWelcomeText = createSelector(
  getWelcomeMat,
  welcomeMat => welcomeMat.welcome
);

