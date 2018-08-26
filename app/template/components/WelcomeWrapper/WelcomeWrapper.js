import React from "react";
import PropTypes from "prop-types";
import WelcomeMat from "../WelcomeMat";
import WelcomeMessage from "../WelcomeMessage";

const WelcomeWrapper = ({ useWelcomeMat }) => {
  useWelcomeMat = true;
  return useWelcomeMat ? <WelcomeMat /> : <WelcomeMessage />;
};

WelcomeWrapper.propTypes = {
  useWelcomeMat: PropTypes.bool
};

export default WelcomeWrapper;
