import userAgentParser from "ua-parser-js";
import clientConfig from "../../template/clientConfig";

export const resolveLink = (href, alias) => {
  if (alias === "app_download" && typeof navigator !== "undefined") {
    const agent = userAgentParser(navigator.userAgent);
    const os = agent ? agent.os.name.toLowerCase() : "";
    switch (os) {
      case "android":
        return clientConfig.get().APP_DOWNLOAD_PLAY_STORE_URI;
      case "ios":
        return clientConfig.get().APP_DOWNLOAD_APP_STORE_URI;
    }
  }
  return href;
};
