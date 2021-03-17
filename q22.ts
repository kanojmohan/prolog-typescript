// Create a list containing all integers within a given range.

export function range(start: number, end: number) {
  const myArray = [];
  for (let i = start; i <= end; i += 1) {
    myArray.push(i);
  }
  return myArray;
}
//   console.log(range(4, 12));
//   module.exports = { range };
