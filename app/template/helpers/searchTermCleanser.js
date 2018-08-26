export default function searchTermCleanser(string) {
  return string
    .toLowerCase()
    .trim()
    .replace(/<\/?[^>]+(>|$)|\t/g, "");
}

