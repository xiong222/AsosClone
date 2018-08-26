import 'isomorphic-fetch';
import logger from '../helpers/logger';
import { HttpsAgent } from 'agentkeepalive';

// Until we're ES6 end to end we have to use this form because with Babel subclasses must extend a class https://github.com/babel/babel/issues/3083
export function ApiError(message, fetchMetadata = {}) {
  this.name = 'ApiError';
  this.message = message || 'Api Error';
  this.stack = new Error().stack;
  this.status = fetchMetadata.status;
  this.statusText = fetchMetadata.statusText;
  this.url = fetchMetadata.url;
  this.responseText = fetchMetadata.responseText;
}
ApiError.prototype = Object.create(Error.prototype);
ApiError.prototype.constructor = ApiError;

const handleErrors = (response) => new Promise((resolve, reject) => {
  if (response.status >= 200 && response.status < 300) {
    resolve(response);
  } else {
    const { status, statusText, url } = response;

    response.text().then((responseText) => {
      const error = new ApiError(response.statusText, {
        status,
        statusText,
        url,
        responseText
      });

      logger.error('Error response from API:', error);

      reject(error);
    });
  }
});

const httpsKeepAliveAgent = new HttpsAgent({
  maxSockets: 160,
  keepAliveMsecs: 3000
});

const request = (url, opts = {}, addHttpsKeepalives) => {
  if (addHttpsKeepalives) {
    opts.agent = httpsKeepAliveAgent;
  }

  return fetch(url, opts)
    .then(handleErrors)
    .then((response) => response.json());
};

export default request;

