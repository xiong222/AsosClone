import { connect } from 'react-redux';
import { bagError, dismissBagError } from '../../../state/modules/bag';
import ErrorMessage from './ErrorMessage';

const mapStateToProps = (state) => ({
  showError: bagError(state)
});

const mapDispatchToProps = { dismissBagError };

export default connect(mapStateToProps, mapDispatchToProps)(ErrorMessage);
