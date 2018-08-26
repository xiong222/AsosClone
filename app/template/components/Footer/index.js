import { connect } from 'react-redux';
import Footer from './Footer';
import { footerNavigation } from '../../state/modules/navigation';
import {DEFAULT_STATE} from "../../state/modules/constants";

function mapStateToProps(state) {
  // state = DEFAULT_STATE;
  return {
    items: footerNavigation(state)
  };
}

export default connect(mapStateToProps)(Footer);

