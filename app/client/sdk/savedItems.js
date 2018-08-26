/* global requirejs */
import { getConfiguration } from "./savedItemsConfiguration";

export const initialise = context =>
  new Promise(resolve =>
    requirejs(["savedItemsSdk/sdk"], sdk =>
      resolve(sdk.getInstance(context, getConfiguration()))
    )
  );

