import _Map from "babel-runtime/core-js/map";
import debug from "debug";
import { cacheError } from "../../errors";

var cacheFactory = {
  create: function create() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      expiryMs = _ref.expiryMs;

    if (typeof expiryMs !== "number") {
      throw cacheError("Invalid argument: Cache expiry (argument name: expiryMs) must be a number");
    }

    var logger = debug("asos-site-chrome-store-presentation:cache");
    var storage = new _Map();

    return {
      set: function set(key, value) {
        storage.set(key, {
          value: value,
          expiry: Date.now() + expiryMs
        });
        return value;
      },
      hasKey: function hasKey(key) {
        return storage.has(key);
      },
      hasExpired: function hasExpired(key) {
        var entry = storage.get(key);
        return entry && entry.expiry < Date.now();
      },
      get: function get(key) {
        if (!this.hasKey(key)) {
          logger("Key missing: " + key);
          return null;
        }
        var entry = storage.get(key);
        if (this.hasExpired(key)) {
          logger("Key expired: " + key);
        }
        return entry.value;
      }
    };
  }
};

export default cacheFactory;
