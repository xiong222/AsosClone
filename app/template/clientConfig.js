import { clientEnvPrefix, siteChromeClientConfig } from "./constants";

const getClientConfigFromWindow = () => {
  if (typeof window !== "undefined" && window[siteChromeClientConfig]) {
    return window[siteChromeClientConfig];
  }
  return false;
};

const isLocal = () =>
  typeof window !== "undefined" && window.location.hostname.includes("local");

const isServer = () => typeof window === "undefined";

const getXSiteOrigin = () => {
  const cookies = document.cookie.split(";");
  const xSite = cookies.find(cookie =>
    cookie.toLowerCase().includes("x-site-origin=")
  );

  if (!xSite) return;

  return xSite.split("=")[1];
};

const getClientConfig = () =>
  getClientConfigFromWindow() ||
  Object.keys(process.env)
    .filter(key => key.startsWith(clientEnvPrefix))
    .reduce((acc, key) => {
      acc[key.replace(clientEnvPrefix, "")] = process.env[key];
      return acc;
    }, {});

export default {
  get: getClientConfig,
  isLocal,
  isServer,
  getXSiteOrigin
};
