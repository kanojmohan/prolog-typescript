export function secondlElement<T>(input: T[]) {
  let item;
  for (item in input) {
  }
  return input[item - 1];
}
