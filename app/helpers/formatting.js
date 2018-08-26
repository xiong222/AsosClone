export const truncateTitle = item =>
  item.subtitle && item.subtitle.length > 0
    ? item.label.substring(0, 24)
    : item.label.substring(0, 36);
