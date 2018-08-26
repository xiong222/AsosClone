import parse from "url-parse";

export const getBackgroundImageUrl = (imageUrl, width) => {
  if (!imageUrl) {
    return "";
  }

  let backgroundImageUrl = parse(imageUrl);

  if (width) {
    backgroundImageUrl.query += `&$n_${width}w$`;
  }

  return backgroundImageUrl.toString();
};
