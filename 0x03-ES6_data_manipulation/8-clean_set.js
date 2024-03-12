export default function cleanSet(set, startString) {
  if (startString) {
    const len = startString.length;
    const arr = [];

    for (const key of set) {
      if (key.startsWith(startString)) {
        arr.push(key.slice(len, -1));
      }
    }

    return arr.join('-');
  }
  return '';
}
