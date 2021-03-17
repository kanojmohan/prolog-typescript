// Extract a slice from a list

const arre = ["a", "b", "c", "d", "e", "f", "g", "h"];

export function extract<T>(arr: T[], ith: number, kth: number) {
  let subset = [];
  for (let i = ith; i <= kth; i++) {
    subset.push(arr[i]);
  }

  return subset;
}
// console.log(extract(arre, 2, 6));
