const shouldLog =
  typeof window === "undefined" || process.env.NODE_ENV === "development";

const logger = {
  info: (...args) =>
    shouldLog && console.info(`[${new Date().toISOString()}]`, ...args),
  error: (...args) =>
    shouldLog && console.error(`[${new Date().toISOString()}]`, ...args),
  warn: (...args) =>
    shouldLog && console.warn(`[${new Date().toISOString()}]`, ...args)
};

export default logger;
