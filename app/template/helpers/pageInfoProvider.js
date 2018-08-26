const SITE_SECTIONS = {
  bag: "bag",
  category: "category",
  creative: "creative",
  homepage: "homepage",
  product: "product",
  savedItems: "saved-items",
  search: "search"
};

export const getPageInfo = () => {
  let page = {
    section: "",
    gender: ""
  };
  if (
    typeof window !== "undefined" &&
    window.location &&
    window.location.pathname
  ) {
    const path = window.location.pathname.toLowerCase().replace(/\/$/, "");
    if (
      path === "" ||
      path === "/fr" ||
      path === "/it" ||
      path === "/de" ||
      path === "/us" ||
      path === "/au" ||
      path === "/es" ||
      path === "/ru"
    ) {
      page.section = SITE_SECTIONS.homepage;
    } else if (path.search(/\/search\//) > -1) {
      page.section = SITE_SECTIONS.search;
    } else if (path.match(/\/cat$/)) {
      page.section = SITE_SECTIONS.category;
    } else if (path.match(/\/prd\/[0-9]+$/) || path.match(/\/grp\/[0-9]+$/)) {
      page.section = SITE_SECTIONS.product;
    } else if (
      path.match(/\/women$/) ||
      path.match(/\/donna$/) ||
      path.match(/\/mujer$/) ||
      path.match(/\/damen$/) ||
      path.match(/\/femme$/)
    ) {
      page.section = SITE_SECTIONS.homepage;
      page.gender = "women";
    } else if (
      path.match(/\/men$/) ||
      path.match(/\/uomo$/) ||
      path.match(/\/hombre$/) ||
      path.match(/\/herren$/) ||
      path.match(/\/homme$/)
    ) {
      page.section = SITE_SECTIONS.homepage;
      page.gender = "men";
    } else if (path.match(/\/saved-items$/)) {
      page.section = SITE_SECTIONS.savedItems;
    } else if (path.match(/\/bag$/)) {
      page.section = SITE_SECTIONS.bag;
    } else {
      page.section = SITE_SECTIONS.creative;
    }
  }
  return page;
};
