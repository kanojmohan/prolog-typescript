// Duplicate the elements of a list

// let a = [2, 3, 3, 1, 4];

export function duplicate<T>(list: T[]) {
  let b = [];
  for (var i = 0; i < list.length; ++i) {
    b.push(list[i]);
    b.push(list[i]);
  }
  return b;
}
// console.log(duplicate(a));
