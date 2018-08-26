import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './Header';
import { clearNavActiveItem } from '../../state/modules/navigation';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      clearNavActiveItem
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(Header);
