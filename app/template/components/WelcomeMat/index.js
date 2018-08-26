import { connect } from "react-redux";
import WelcomeMat from "./WelcomeMat";
import {
  requestWelcomeMat,
  getWelcomeMessage,
  getWelcomeMatRedirectUrl,
  getValuePropositionMessages,
  getValueHeader,
  getWelcomeMatCountry,
  getPaymentOptions,
  getWelcomeText
} from "../../state/modules/welcomeMat";
import { getPlatform } from "../../state/modules/layout";
import { isCorrectCountry } from "../../state/modules/regionalStore";

const mapStateToProps = state => ({
  text: getWelcomeMessage(state),
  redirectUrl: getWelcomeMatRedirectUrl(state),
  country: getWelcomeMatCountry(state),
  messages: getValuePropositionMessages(state),
  platform: getPlatform(state),
  isCorrectCountry: isCorrectCountry(state),
  paymentOptions: getPaymentOptions(state),
  valueHeader: getValueHeader(state),
  welcome: getWelcomeText(state)
});

const mapDispatchToProps = {
  requestWelcomeMat
};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeMat);
