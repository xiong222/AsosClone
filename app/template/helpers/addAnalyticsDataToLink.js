const prep = string => {
  return encodeURIComponent(string.toLowerCase()).replace(/%20/g, "+");
};

const addQuerystringSuffix = link => {
  return link.includes("?") ? `${link}&` : `${link}?`;
};

export const addAnalyticsDataToLink = ({ link, gender, labelPath }) => {
  if (!link) {
    return null;
  }

  if (!gender) {
    return link;
  }

  if (labelPath.length === 6) {
    const [, , , section, container] = labelPath;

    if (section && container) {
      return `${addQuerystringSuffix(link)}nlid=${prep(gender)}|${prep(
        section
      )}|${prep(container)}`;
    }
  }

  if (labelPath.length === 4) {
    const [, , section] = labelPath;

    if (section) {
      return `${addQuerystringSuffix(link)}nlid=${prep(gender)}|${prep(
        section
      )}`;
    }
  }

  return link;
};
