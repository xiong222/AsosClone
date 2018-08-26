import { connect } from 'react-redux';
import HtmlHeader from './HtmlHeader';
import { getViewport } from '../../state/modules/layout';

const mapStateToProps = (state) => ({
  viewport: getViewport(state)
});

export default connect(mapStateToProps)(HtmlHeader);
