export var setHttpUrlsToHttps = function setHttpUrlsToHttps(url) {
  var httpUrlRegexPattern = /^http:\/\//i;

  var formattedUrl = url.match(httpUrlRegexPattern) ? url.replace(httpUrlRegexPattern, "https://") : url;

  return formattedUrl;
};
