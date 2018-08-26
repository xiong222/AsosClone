import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';
import Fade from './Fade';
import Backdrop from './Backdrop';
import Form from './Form';
import Container from './Container';

const CountrySelector = ({
  alternateUrls,
  country,
  hasSetCurrencyError,
  hasVoucherError,
  isLoading,
  isOpen,
  noOfProductsInBag,
  onClose,
  onCountryChange,
  onSubmit,
  regionalStore
}) => (
  <Fade isActive={isOpen}>
    <Backdrop />
    <Container
      onClose={onClose}
      isLoading={isLoading}
      withError={hasVoucherError || hasSetCurrencyError}
    >
      {isLoading || country == null ? (
        <Spinner size="x-large" />
      ) : (
        <Form
          {...country}
          hasSetCurrencyError={hasSetCurrencyError}
          hasVoucherError={hasVoucherError}
          noOfProductsInBag={noOfProductsInBag}
          onClose={onClose}
          onCountryChange={onCountryChange}
          onSubmit={onSubmit}
          regionalStore={regionalStore}
          storeUrl={
            alternateUrls &&
            alternateUrls[country.lang] &&
            alternateUrls[country.lang].url
          }
        />
      )}
    </Container>
  </Fade>
);

CountrySelector.propTypes = {
  alternateUrls: PropTypes.object,
  country: PropTypes.object,
  hasVoucherError: PropTypes.bool,
  hasSetCurrencyError: PropTypes.bool,
  isLoading: PropTypes.bool,
  isOpen: PropTypes.bool,
  noOfProductsInBag: PropTypes.number,
  onClose: PropTypes.func.isRequired,
  onCountryChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  regionalStore: PropTypes.shape({
    countryCode: PropTypes.string,
    storeCode: PropTypes.string,
    siteId: PropTypes.number,
    currency: PropTypes.string,
    language: PropTypes.string,
    countryName: PropTypes.string,
    sizeSchema: PropTypes.string
  })
};

export default CountrySelector;
