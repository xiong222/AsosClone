export var desktopUrls = new RegExp(/https?:\/\/((www|us|test|ustest)\.)?asos(services)?\.(com|de|fr)(\/(es|it|au|ru|nl|se))?/i);

export var desktopToMobile = function desktopToMobile(link, storeUrl) {
  if (link && storeUrl) {
    link = link.replace(desktopUrls, storeUrl);
  }
  return link;
};
