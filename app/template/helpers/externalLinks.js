import clientConfig from "../clientConfig";

export const getMarketplaceUrl = () => clientConfig.get().MARKETPLACE_URL;
export const getMyAccountBaseUrl = () => clientConfig.get().MY_ACCOUNT_BASE_URL;
export const getIdentitySdkAuthHost = () =>
  clientConfig.get().IDENTITY_SDK_AUTH_HOST;


