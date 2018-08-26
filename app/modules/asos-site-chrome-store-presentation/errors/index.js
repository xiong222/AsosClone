export var errors = {
  StoreServiceError: "StoreServiceError",
  StoreFormatError: "StoreFormatError",
  StoreNotFoundError: "StoreNotFoundError",
  CacheError: "CacheError",
  InvalidArgumentError: "InvalidArgumentError"
};

export var storeServiceError = function storeServiceError(message, e) {
  return {
    type: errors.StoreServiceError,
    message: message,
    raw: e
  };
};

export var storeFormatError = function storeFormatError(message) {
  return {
    type: errors.StoreFormatError,
    message: message
  };
};

export var storeNotFoundError = function storeNotFoundError(message) {
  return {
    type: errors.StoreNotFoundError,
    message: message
  };
};

export var cacheError = function cacheError(message) {
  return {
    type: errors.CacheError,
    message: message
  };
};

export var invalidArgumentError = function invalidArgumentError(message) {
  return {
    type: errors.InvalidArgumentError,
    message: message
  };
};
