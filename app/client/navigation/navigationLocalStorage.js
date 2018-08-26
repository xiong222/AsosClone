import { siteChromeNavigationStoreKey, expirationInMs } from "./constants";

export const getFromLocalStorage = ({ countryCode, language }) => {
  const storedJson = localStorage.getItem(siteChromeNavigationStoreKey);

  try {
    const stored = JSON.parse(storedJson);
    if (stored.countryCode === countryCode && stored.language === language) {
      return stored;
    }
  } catch (e) {
    return {};
  }

  return {};
};

export const addToLocalStorage = ({ data, countryCode, language }) =>
  localStorage.setItem(
    siteChromeNavigationStoreKey,
    JSON.stringify({
      data,
      countryCode,
      language,
      time: Date.now() + expirationInMs
    })
  );

