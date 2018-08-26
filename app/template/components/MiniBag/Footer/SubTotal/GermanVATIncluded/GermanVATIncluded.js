const GermanVATIncluded = ({ storeCode }) =>
  (storeCode === 'DE' ? 'inkl. MwSt.' : null);

export default GermanVATIncluded;
