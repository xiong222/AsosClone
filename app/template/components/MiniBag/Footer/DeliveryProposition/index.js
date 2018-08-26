import { connect } from 'react-redux';
import DeliveryProposition from './DeliveryProposition';
import { getDefaultStoreUrl } from '../../../../state/modules/regionalStore';

const mapStateToProps = (state) => ({
  defaultStoreUrl: getDefaultStoreUrl(state)
});

export default connect(mapStateToProps)(DeliveryProposition);
