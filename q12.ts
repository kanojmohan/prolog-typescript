export function decode(encoded) {
  let uncompressed = [];

  /**
   * Create a new array with decoded data
   */
  encoded.map((element, ind) => {
    if (ind % 2 === 0) {
      uncompressed.push(...Array(element).fill(encoded[ind + 1]));
    }
  });

  return uncompressed;
}
