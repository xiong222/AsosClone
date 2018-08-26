import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  closeCountrySelector,
  getCountrySelectorAlternateUrls,
  getCountrySelectorCountry,
  getCountrySelectorError,
  getCountrySelectorLoading,
  getCountrySelectorVisibility,
  getHasSetCurrencyError,
  getHasVoucherError,
  setCountry,
  updatePreferences
} from '../../state/modules/countrySelector';
import {
  getCountryCode,
  getStoreCode,
  getSiteId,
  getCurrency,
  getDefaultLanguage,
  getCountryName,
  getDefaultSizeSchema
} from '../../state/modules/regionalStore';
import { getTotalQuantity } from '../../state/modules/bag';
import CountrySelector from './CountrySelector';
import {DEFAULT_STATE} from "../../state/modules/constants";

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      onClose: closeCountrySelector,
      onCountryChange: setCountry,
      onSubmit: updatePreferences
    },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    alternateUrls: getCountrySelectorAlternateUrls(state),
    country: getCountrySelectorCountry(state),
    error: getCountrySelectorError(state),
    hasSetCurrencyError: getHasSetCurrencyError(state),
    hasVoucherError: getHasVoucherError(state),
    isLoading: getCountrySelectorLoading(state),
    isOpen: getCountrySelectorVisibility(state),
    noOfProductsInBag: getTotalQuantity(state),
    regionalStore: {
      countryCode: getCountryCode(state),
      storeCode: getStoreCode(state),
      siteId: getSiteId(state),
      currency: getCurrency(state),
      language: getDefaultLanguage(state),
      countryName: getCountryName(state),
      sizeSchema: getDefaultSizeSchema(state)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CountrySelector);
