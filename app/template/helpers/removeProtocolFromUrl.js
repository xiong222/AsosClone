export default function removeProtocolFromUrl(string) {
  return string.replace(/(^\w+:|^)/, "");
}
