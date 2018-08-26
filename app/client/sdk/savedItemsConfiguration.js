import clientConfig from "../../template/clientConfig";

const buildConfiguration = config => {
  if (clientConfig.isLocal()) {
    return {
      postMessageUrl: config.SDK_POST_MESSAGE_URL,
      xSiteOrigin: config.SDK_X_SITE_ORIGIN,
      savedItemsApiUrl: config.SDK_SAVED_ITEMS_API_URL
    };
  }

  return {
    xSiteOrigin: clientConfig.getXSiteOrigin()
  };
};

export const getConfiguration = () => buildConfiguration(clientConfig.get());

