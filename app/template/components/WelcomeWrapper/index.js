import { connect } from "react-redux";
import WelcomeWrapper from "./WelcomeWrapper";
import { isFeatureActive } from "../../state/modules/features";

const mapStateToProps = state => ({
  useWelcomeMat: true /*!!isFeatureActive(state, "stc-welcome-mat-changes")*/
});

export default connect(mapStateToProps)(WelcomeWrapper);
