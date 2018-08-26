export default function get(object, path) {
  const splitPath = path.split(".");
  const length = splitPath.length;
  let index = 0;

  while (object != null && index < length) {
    object = object[splitPath[index++]];
  }

  return index && index === length ? object : undefined;
}
