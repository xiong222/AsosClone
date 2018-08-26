import { storeFormatError } from "../../errors";

var getPrimary = function getPrimary(_ref) {
  var list = _ref.list,
    errorMessage = _ref.errorMessage;

  var primaryItem = list.find(function (item) {
    return item.isPrimary;
  });
  if (primaryItem) {
    return primaryItem;
  }
  throw storeFormatError(errorMessage);
};

export var getPrimaryLanguage = function getPrimaryLanguage(store) {
  return getPrimary({
    list: store.languages,
    errorMessage: "No primary language defined for " + store.country + " store"
  }).language;
};

export var getPrimaryCurrency = function getPrimaryCurrency(store) {
  return getPrimary({
    list: store.currencies,
    errorMessage: "No primary currency defined for " + store.country + " store"
  }).currency;
};

export var getPrimarySizeSchema = function getPrimarySizeSchema(store) {
  return getPrimary({
    list: store.sizeSchemas,
    errorMessage: "No primary size defined for " + store.country + " store"
  }).sizeSchema;
};
