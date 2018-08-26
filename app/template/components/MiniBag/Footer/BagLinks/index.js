import { connect } from 'react-redux';
import BagLinks from './BagLinks';
import { startCheckout } from '../../../../state/modules/bag';
import { getDefaultStoreUrl } from '../../../../state/modules/regionalStore';

const mapStateToProps = (state) => ({
  defaultStoreUrl: getDefaultStoreUrl(state)
});

const mapDispatchToProps = {
  startCheckout
};

export default connect(mapStateToProps, mapDispatchToProps)(BagLinks);
