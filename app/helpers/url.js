export function getParamValue(urlParam) {
  const params = window.location.search.substring(1).split('&');
  const browseUrl =
    params.find(p =>
      p.toLowerCase().startsWith(`${urlParam.toLowerCase()}=`)
    ) || '';

  return browseUrl.split('=')[1];
}

export function getCurrentUrl() {
  const { host, pathname } = window.location;
  return host + pathname;
}

export function removeURLParameter(url, parameter) {
  const urlParts = url.split('?');
  if (urlParts.length >= 2) {
    const prefix = encodeURIComponent(parameter) + '=';
    const parts = urlParts[1].split(/[&;]/g);

    for (let i = parts.length; i-- > 0; ) {
      if (parts[i].lastIndexOf(prefix, 0) !== -1) {
        parts.splice(i, 1);
      }
    }

    return urlParts[0] + (parts.length ? '?' + parts.join('&') : '');
  } else {
    return url;
  }
}

export const stripSubdomain = hostname =>
  hostname
    .split('.')
    .slice(1)
    .join('.');

