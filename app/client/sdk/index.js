import { initialise as initialiseIdentity } from "./identity";
import { initialise as initialiseBag } from "./bag";
import { initialise as initialiseSavedItems } from "./savedItems";
import {
  initialise as initialiseFeatures,
  addManifestFeatures
} from "./features";

const getMappedContext = values => ({
  storeId: values.storeId,
  country: values.browseCountry,
  originCountry: values.geoCountry,
  currency: values.browseCurrency,
  language: values.browseLanguage,
  sizeSchema: values.browseSizeSchema,
  keyStoreDataversion: values.keyStoreDataversion
});

const ready = name => sdk => {
  window.__sdk[name] = sdk;
  window.analyticsEventEmitter.emit(`${name}-sdk-ready`, sdk);
  return sdk;
};

export const initialise = async (store, context) => {
  const webContext = context.getWebContext();
  const mappedWebContext = getMappedContext(webContext);
  const bagSdkContext = mappedWebContext;
  const { country, ...savedItemsSdkContext } = mappedWebContext; // eslint-disable-line no-unused-vars
  return Promise.all([
    initialiseFeatures(webContext)
      .then(ready("features"))
      .then(addManifestFeatures)
      .then(() => {
        window.analyticsEventEmitter.emit(
          `features-mvt-ready`,
          window.__sdk.features
        );
      }),
    initialiseIdentity(store)
      .then(ready("identity"))
      .then(() => initialiseBag(bagSdkContext).then(ready("bag")))
      .then(() =>
        initialiseSavedItems(savedItemsSdkContext).then(ready("savedItems"))
      )
  ]).then(() => window.analyticsEventEmitter.emit(`sdk-ready`, window.__sdk));
};


