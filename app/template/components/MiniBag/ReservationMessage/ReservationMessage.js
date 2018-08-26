import React from "react";
import PropTypes from "prop-types";
import withTranslation from "../../translation";
import Notification from "../../Notification";

let mapProductToMessage = {
  Product: "reservationMessage",
  Subscription: "subscriptionConfirmationMessage",
  Voucher: "voucherConfirmationMessage"
};

const ReservationMessage = ({
                              formatTranslation,
                              displayReservationMessage,
                              items
                            }) => {
  return displayReservationMessage ? (
    <Notification type="success">
      {formatTranslation(`MiniBag.${mapProductToMessage[items[0].itemType]}`)}
    </Notification>
  ) : null;
};

ReservationMessage.propTypes = {
  formatTranslation: PropTypes.func.isRequired,
  displayReservationMessage: PropTypes.bool,
  items: PropTypes.array
};

ReservationMessage.defaultProps = {
  displayReservationMessage: false
};

export default withTranslation(ReservationMessage);
