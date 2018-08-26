import clientConfig from './clientConfig';

export const siteChromePublicWindowApi = '__siteChrome';
export const manifestWindowKey = '__versionManifest';
export const siteChromeInitialStore = '__siteChromeInitialStore';
export const siteChromeTokenValues = '__siteChromeTokenValues';
export const RECENT_SEARCHES_KEY = '__asosRecentSearches';
export const siteChromeClientConfig = '__chromeConfig';
export const sdkPublicWindow = '__sdk';
export const clientEnvPrefix = 'CLIENT_';
export const getExternalScripts = () => [clientConfig.get().WEB_ANALYTICS_URL];
