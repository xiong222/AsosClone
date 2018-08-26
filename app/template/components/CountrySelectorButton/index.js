import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CountrySelectorButton from './CountrySelectorButton';
import {
  getCountryName,
  getCountryFlag
} from '../../state/modules/regionalStore';
import { openCountrySelector } from '../../state/modules/countrySelector';
import { closeSidePanel } from '../../state/modules/layout';

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      openCountrySelector,
      closeSidePanel
    },
    dispatch
  );

const mapStateToProps = (state) => ({
  countryName: getCountryName(state),
  countryFlag: getCountryFlag(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(
  CountrySelectorButton
);
