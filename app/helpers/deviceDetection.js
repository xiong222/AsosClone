import userAgentParser from "ua-parser-js";

const getUserAgent = () =>
  userAgentParser(typeof navigator !== "undefined" && navigator.userAgent);

const parseUserAgent = agent => ({
  browser: agent.browser.name || "",
  os: agent.os.name || ""
});

export default class DeviceDetection {
  constructor() {
    const { browser, os } = parseUserAgent(getUserAgent());

    this.browser = browser;
    this.os = os;
  }

  isIos() {
    return this.os === "iOS";
  }

  isAndroidChrome() {
    return this.browser === "Chrome [WebView]" && this.os === "Android";
  }
}

