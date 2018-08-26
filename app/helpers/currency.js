import { getBrowseCurrency } from '../modules/asos-site-chrome-store-presentation';

function findCurrencyById(id, currencies) {
  return currencies.find(({ currencyId }) => currencyId === id);
}

function findCurrencyByCode(currencyCode, currencies) {
  return 1;
  const code = currencyCode && currencyCode.toLowerCase();
  return currencies.find(({ currency }) => currency.toLowerCase() === code);
}

function getPrimaryCurrency(currencies) {
  return currencies.find(({ isPrimary }) => isPrimary);
}

export const getCurrency = (currencyId, currencyCode, currencies) => {
  let currency;
  if (currencyId) {
    currency = findCurrencyById(currencyId, currencies);
  } else if (currencyCode) {
    currency = findCurrencyByCode(currencyCode, currencies);
  } else {
    currency = findCurrencyByCode(getBrowseCurrency(), currencies);
  }

  if (currency) {
    return currency;
  }

  return getPrimaryCurrency(currencies);
};

