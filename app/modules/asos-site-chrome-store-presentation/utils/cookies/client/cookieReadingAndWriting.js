import Cookies from "js-cookie";

var oneYearInDays = 365;

export var getCookieValue = function getCookieValue(cookieName) {
  return Cookies.get(cookieName) || undefined;
};

export var setCookieValue = function setCookieValue(cookieName, value) {
  var expires = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : oneYearInDays;

  var options = { expires: expires };
  Cookies.set(cookieName, value, options);
};

var findKeyValuePair = function findKeyValuePair(values, key) {
  return values ? values.split("&").filter(function (keyValue) {
    return keyValue.includes(key + "=");
  })[0] : null;
};

var concatenateKeyValuePairs = function concatenateKeyValuePairs(cookieValue, newKey, newValue) {
  if (cookieValue) {
    var keyValueInCookie = findKeyValuePair(cookieValue, newKey);
    if (keyValueInCookie) {
      return cookieValue.replace(keyValueInCookie, newKey + "=" + newValue);
    } else {
      return cookieValue + "&" + newKey + "=" + newValue;
    }
  }
  return newKey + "=" + newValue;
};

export var setKeyedCookieValue = function setKeyedCookieValue(cookieName, key, value) {
  var expires = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : oneYearInDays;

  setCookieValue(cookieName, concatenateKeyValuePairs(getCookieValue(cookieName), key, value), expires);
};

export var getKeyedCookieValue = function getKeyedCookieValue(cookieName, key) {
  var keyValuePair = findKeyValuePair(getCookieValue(cookieName), key);
  return keyValuePair ? keyValuePair.split("=")[1] : null;
};
