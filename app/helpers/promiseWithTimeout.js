const PROMISE_TIMEOUT = 5000;

const wrapPromiseWithTimeout = (promise, ms = PROMISE_TIMEOUT) =>
  new Promise((resolve, reject) => {
    promise.then(resolve).catch(reject);
    setTimeout(() => {
      reject(new Error("Bag SDK not responding"));
    }, ms);
  });

export default wrapPromiseWithTimeout;
