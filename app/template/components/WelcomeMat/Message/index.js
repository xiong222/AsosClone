import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Message from './Message';
import { openCountrySelector } from '../../../state/modules/countrySelector';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ openCountrySelector }, dispatch);
}

export default connect(null, mapDispatchToProps)(Message);
