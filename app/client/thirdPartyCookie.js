import clientConfig from "../template/clientConfig";
import { parse, format } from "url";

const ALLOWED_DOMAINS = [
  "local.asos.com",
  "www.asos.com",
  "www.asos.fr",
  "www.asos.de",
  "test.asosservices.com",
  "test.asosservices.fr",
  "test.asosservices.de"
];

const alreadyRedirected = query => query && query.crd && query.crd === "true";

export default function startIframe() {
  const iframeUrl = clientConfig.get().IFRAME_URL;
  const currentUrl = parse(window.location.href, true, false);
  if (iframeUrl && !alreadyRedirected(currentUrl.query)) {
    window.addEventListener("message", function(event) {
      const domain = parse(event.origin);
      if (
        ALLOWED_DOMAINS.includes(domain.hostname) &&
        event.data === "redirection_needed"
      ) {
        currentUrl.query["crd"] = "true";
        delete currentUrl.search;

        window.location.href =
          iframeUrl +
          "?doRedirect=true&referrer=" +
          encodeURIComponent(format(currentUrl));
      }
    });

    const iframe = document.createElement("iframe");
    iframe.src = iframeUrl;
    iframe.width = 0;
    iframe.height = 0;
    iframe.style.display = "none";
    document.body.appendChild(iframe);
  }
}
