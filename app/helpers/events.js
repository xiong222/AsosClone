// file to be replaced by analytics.js implementation?
import { EventEmitter } from 'fbemitter';
import { parse } from 'url';

/* istanbul ignore next */
export class LoggingEmitter extends EventEmitter {
  emit(...args) {
    const { query } = parse(location.toString(), true);
    if (query && query.analytics === 'true') {
      console.log(...args); //eslint-disable-line no-console
    }
    return super.emit(...args);
  }
}

const emitter = new LoggingEmitter();
const emit = (eventName, details) => emitter.emit(eventName, details);
const pageLoadData = {};
const pageLoadEventsToTrack = ['tracking.productList.pageLoad'];

const trackPageLoads = () => {
  // Capture selected pageLoad events
  pageLoadEventsToTrack.forEach(event => {
    emitter.addListener(event, payload => {
      pageLoadData[event] = payload;
    });
  });

  //re-emit them for signal when they're ready
  emitter.addListener("signal-ready", () => {
    Object.keys(pageLoadData).forEach(event => {
      const payload = pageLoadData[event];
      emit(event + "-signal", payload);
    });
  });
};

trackPageLoads();

export default emitter;

export const ANALYTICS_INTERACTION_CLICK = "click";
export const ANALYTICS_INTERACTION_EXPAND = "expand";
export const ANALYTICS_INTERACTION_HOVER = "hover";
export const ANALYTICS_INTERACTION_SAVED = "saved";
export const ANALYTICS_POSITION_HEADER = "header";
export const ANALYTICS_POSITION_FOOTER = "footer";
export const ANALYTICS_POSITION_COUNTRY_SELECTOR = "country selector modal";
export const ANALYTICS_CONTEXT = {
  navHover: "nav hover",
  openNav: "open nav section",
  social: "social icon",
  openCountryModal: "open country modal",
  footerExpandable: "concertina",
  countrySelector: "country preferences",
  minibagDeleteItem: "mini bag product delete"
};

export const getGender = str => {
  if (str === "men" || str === "women") return str;
  if (str === "MW") return "men";
  if (str === "WW") return "women";
};

export const trackSocialClick = details =>
  emit("tracking.navigation.pageInteraction", details);

export const trackNavOpen = details =>
  emit("tracking.navigation.pageInteraction", details);

export const trackOpenCountryModal = details =>
  emit("tracking.navigation.pageInteraction", details);

export const trackSubmitCountrySelector = details =>
  emit("tracking.navigation.pageInteraction", details);

export const trackMiniBagProductDelete = details =>
  emit("tracking.miniBag.miniBagInteraction", details);

export const trackBannerShown = () =>
  emit("tracking.gdpr.bannerShow", {
    context: "gdpr banner shown",
    trackingFrequency: "session"
  });

export const trackBannerClose = () =>
  emit("tracking.gdpr.bannerClose", {
    context: "gdpr banner closed",
    trackingFrequency: "session"
  });

export const trackGdprKeepSending = basicDetails =>
  emit("tracking.gdpr.pageLoad", {
    ...basicDetails,
    pageName: "gdpr keep sending",
    pageTitle: "gdpr keep sending"
  });

export const trackGdprStopSending = basicDetails =>
  emit("tracking.gdpr.pageLoad", {
    ...basicDetails,
    pageName: "gdpr stop sending",
    pageTitle: "gdpr stop sending"
  });

export const trackOpenGdprModal = basicDetails =>
  emit("tracking.gdpr.pageLoad", {
    ...basicDetails,
    pageName: "gdpr control my content",
    pageTitle: "gdpr control my content"
  });
