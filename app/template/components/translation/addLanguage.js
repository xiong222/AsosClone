import { connect } from 'react-redux';
import { getDefaultLanguage } from '../../state/modules/regionalStore';

const mapStateToProps = (state) => ({ language: getDefaultLanguage(state) });

export const addLanguage = (Component) => connect(mapStateToProps)(Component);
