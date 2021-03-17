// Duplicate the elements of a list a given number of times.a = [2, 3, 3, 1, 4];
// let a = [2, 3, 3, 1, 4];
export function duplicateNtimes<T>(list: T[], n: number) {
  let b = [];
  for (var i = 0; i < list.length; ++i) {
    for (var j = 0; j < n; j++) {
      b.push(list[i]);
    }
  }
  return b;
}
// console.log(duplicateNtimes(a, 3));
