const env = (key, defaultValue) => {
  // eslint-disable-next-line no-prototype-builtins
  if (process.env.hasOwnProperty(key)) {
    return process.env[key];
  }
  if (typeof defaultValue !== "undefined") {
    return defaultValue;
  }
  throw new Error(`No ${key} environment variable is defined.`);
};

export default env;
