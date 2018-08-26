import parse from "url-parse";

export const withParams = (link, params = {}) => {
  let parsedLink = parse(link, true);

  parsedLink.query = {
    ...parsedLink.query,
    ...params
  };

  return parsedLink.toString();
};
