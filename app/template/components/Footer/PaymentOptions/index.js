import PaymentOptions from "./PaymentOptions";
import { connect } from "react-redux";
import { getPaymentProviders } from "../../../state/modules/regionalStore";
import { getViewport } from "../../../state/modules/layout";

function mapStateToProps(state) {
  return {
    paymentProviders: getPaymentProviders(state),
    viewport: getViewport(state)
  };
}

export default connect(mapStateToProps)(PaymentOptions);
