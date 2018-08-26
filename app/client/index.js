import "babel-polyfill";
import "details-polyfill";
import React from "react";
import { hydrate } from "react-dom";
import {
  Header,
  Footer,
  WelcomeWrapper,
  updateStateWithClientData
} from "./Root";
import startIframe from "./thirdPartyCookie";
import "./reactAxe";

document.addEventListener("DOMContentLoaded", function() {
  const headerElement = document.getElementById("chrome-header");
  const footerElement = document.getElementById("chrome-footer");
  const welcomeMatElement = document.getElementById("chrome-welcome-mat");

  hydrate(<Header />, headerElement);
  hydrate(<Footer />, footerElement);
  hydrate(<WelcomeWrapper />, welcomeMatElement);

  window.analyticsEventEmitter.emit("hydrate-ready");

  updateStateWithClientData();
});

startIframe();

