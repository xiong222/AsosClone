var oneYearInSeconds = 365 * 24 * 60 * 60;

export var getCookieValue = function getCookieValue(req, cookieName) {
  return req.cookies[cookieName] || null;
};

export var setCookieValue = function setCookieValue(res, cookieName, value) {
  var expiry = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : { maxAge: oneYearInSeconds };

  res.cookie(cookieName, value, expiry);
};

export var findKeyValuePair = function findKeyValuePair(values, key) {
  return values ? values.split("&").filter(function (keyValue) {
    return keyValue.includes(key + "=");
  })[0] : null;
};

export var concatenateKeyValuePairs = function concatenateKeyValuePairs(cookieValue, newKey, newValue) {
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

export var setKeyedCookieValue = function setKeyedCookieValue(req, res, cookieName, key, value, expiry) {
  setCookieValue(res, cookieName, concatenateKeyValuePairs(getCookieValue(req, cookieName), key, value), expiry);
};

export var getKeyedCookieValue = function getKeyedCookieValue(req, cookieName, key) {
  var keyValuePair = findKeyValuePair(getCookieValue(req, cookieName), key);
  return keyValuePair ? keyValuePair.split("=")[1] : null;
};
