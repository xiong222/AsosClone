import { getContext } from "../../../../client/context";
import parse from "url-parse";

const getRedirectionUrl = (url, browseCountry) => {
  const parsedUrl = parse(`//${url}`);
  const extraParams = { r: 1, ctaref: "welcome mat", browseCountry };

  const affiliateId = getContext().getAffiliateId();
  if (affiliateId) {
    extraParams.xaffid = affiliateId;
  }

  parsedUrl.query = { ...parsedUrl.query, ...extraParams };

  return parsedUrl;
};

export default getRedirectionUrl;
