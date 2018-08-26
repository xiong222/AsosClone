import { connect } from "react-redux";
import { requestWelcomeMessage } from "../../state/modules/welcomeMessage/actions";
import WelcomeMessage from "./WelcomeMessage";
import { getPlatform } from "../../state/modules/layout";

const mapStateToProps = state => ({
  ...state.welcomeMessage,
  platform: getPlatform(state)
});

const mapDispatchToProps = {
  requestWelcomeMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeMessage);
