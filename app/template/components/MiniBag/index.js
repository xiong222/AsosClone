import { connect } from 'react-redux';
import MiniBag from './MiniBag';
import {
  getBagItems,
  getLoading,
  bagItemDeleteTransitionEnd
} from '../../state/modules/bag';
import { getDefaultStoreUrl } from '../../state/modules/regionalStore';

const mapStateToProps = (state) => ({
  defaultStoreUrl: getDefaultStoreUrl(state),
  items: getBagItems(state),
  loading: getLoading(state)
});

const mapDispatchToProps = {
  bagItemDeleteTransitionEnd
};

export default connect(mapStateToProps, mapDispatchToProps)(MiniBag);
