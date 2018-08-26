export default function setProtocol(url) {
  var isHttps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var hasProtocol = url.indexOf("://") != -1;

  if (hasProtocol) {
    url = url.replace(/^https?:\/\//, "");
  }

  var updatedUrl = isHttps ? "https://" + url : url = "http://" + url;
  return updatedUrl;
}
