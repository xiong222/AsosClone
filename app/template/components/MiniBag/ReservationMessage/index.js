import { connect } from "react-redux";
import {
  displayReservationMessage,
  getBagItems
} from "../../../state/modules/bag";
import ReservationMessage from "./ReservationMessage";

const mapStateToProps = state => ({
  displayReservationMessage: displayReservationMessage(state),
  items: getBagItems(state)
});

export default connect(mapStateToProps)(ReservationMessage);
