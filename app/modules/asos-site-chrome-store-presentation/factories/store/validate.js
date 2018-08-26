import { storeServiceError } from "../../errors";

export default function validate(storeApiEndpoint, versionManifestEndpoint, warn) {
  if (typeof warn !== "function") {
    throw storeServiceError("Invalid argument: warn (must be a function)");
  }

  if (typeof storeApiEndpoint !== "string" || storeApiEndpoint.length === 0) {
    throw storeServiceError("Invalid argument: StoreAPI endpoint (argument name: storeApiEndpoint) must be a string");
  }

  if (typeof versionManifestEndpoint !== "string" || versionManifestEndpoint.length === 0) {
    throw storeServiceError("Invalid argument: StoreAPI endpoint (argument name: versionManifestEndpoint) must be a string");
  }

  return true;
}
