import clientConfig from "../../../../../template/clientConfig";

export const BounceEffect = !clientConfig.isServer()
  ? require("inobounce")
  : { enable: () => {}, disable: () => {} };
