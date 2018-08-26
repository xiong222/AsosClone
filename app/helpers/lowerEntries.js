export default function lowerEntries(obj) {
  if (typeof obj !== "object" || !obj) return obj;

  return Object.keys(obj).reduce(
    (lowered, key) => ({
      ...lowered,
      [key]: typeof obj[key] === "string" ? obj[key].toLowerCase() : obj[key]
    }),
    {}
  );
}
