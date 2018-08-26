/* global requirejs */
import { getConfiguration } from "./bagConfiguration";
import clientConfig from "../../template/clientConfig";
import emitter from "../../helpers/events";
import promiseWithTimeout from "../../helpers/promiseWithTimeout";

export const initialise = context =>
  new Promise(resolve =>
    requirejs(["bagSdk/sdk"], sdk =>
      resolve(sdk.getInstance(context, getConfiguration()))
    )
  );

export const waitForBagSDK = () =>
  new Promise((resolve, reject) => {
    if (clientConfig.isServer()) {
      return reject();
    }
    if (window.__sdk && window.__sdk.bag) {
      return resolve(window.__sdk.bag);
    }
    emitter.addListener("bag-sdk-ready", resolve);
  });

export const getBagSummary = () =>
  waitForBagSDK()
    .then(bag => bag.getBagSummary())
    .catch(/* istanbul ignore next */ _ => _);

export const removeItem = (itemId, itemType) =>
  waitForBagSDK().then(bag =>
    promiseWithTimeout(bag.removeItem(itemId, itemType))
  );

export const getBag = () =>
  waitForBagSDK()
    .then(bag => bag.getBag())
    .catch(/* istanbul ignore next */ _ => _);

export const subscribeToUpdates = callback =>
  waitForBagSDK()
    .then(bag => {
      //eslint-disable-next-line no-undef
      $(bag).on("bagUpdated:completed", (...args) => {
        const { bag, messages } = args[2];
        callback({ bag, messages });
      });
    })
    .catch(/* istanbul ignore next */ _ => _);

export const startCheckout = () =>
  waitForBagSDK()
    .then(bag => bag.startCheckout())
    .catch(/* istanbul ignore next */ _ => _);

