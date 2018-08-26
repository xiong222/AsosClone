/* global requirejs */
import {
  getStoreCode,
  getCountryCode,
  getKeyStoreDataversion,
  getDefaultLanguage
} from "../../template/state/modules/regionalStore";
import clientConfig from "../../template/clientConfig";
const TOKEN_TYPES = "id_token token";
const IDENTITY_SCOPES = "openid sensitive profile";

export const initialise = store =>
  new Promise(resolve => {
    const config = clientConfig.get();
    const state = store.getState();
    const identityConfig = {
      lang: getDefaultLanguage(state),
      regionalIsoCode: getDefaultLanguage(state),
      clientId: config.IDENTITY_SDK_CLIENT_ID,
      customerApiUrl: config.IDENTITY_SDK_CUSTOMER_API_URL,
      authenticationHost: config.IDENTITY_SDK_AUTH_HOST,
      identityOrigin: config.IDENTITY_SDK_IDENTITY_ORIGIN,
      responseMode: "json",
      store: getStoreCode(state),
      countryCode: getCountryCode(state),
      keyStoreDataversion: getKeyStoreDataversion(state),
      types: TOKEN_TYPES,
      scope: IDENTITY_SCOPES,
      redirectUri: window.location.href
    };

    /*
    requirejs(["asos.identity.sdk.config"], configurator => {
      configurator.setConfig(identityConfig);

      requirejs(["asos.identity.web.clientsdk"], resolve);
    });
    */
  });

