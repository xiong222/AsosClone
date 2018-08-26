export const getValueFromSessionStorage = key => {
  try {
    return sessionStorage.getItem(key);
  } catch (e) {
    return false;
  }
};

export const hasSessionStorageKey = key => {
  try {
    return !!sessionStorage.getItem(key);
  } catch (e) {
    return false;
  }
};

export const setSessionStorage = (key, value) => {
  try {
    sessionStorage.setItem(key, value);
  } catch (e) {
    return false;
  }
};

export const setLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    return false;
  }
};

export const getValueFromLocalStorage = key => {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    return false;
  }
};

export const removeValueFromLocalStorage = key => {
  try {
    return localStorage.removeItem(key);
  } catch (e) {
    return false;
  }
};
