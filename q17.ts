// Split a list into two parts; the length of the first part is given.

const arrr = ["a", "b", "c", "d", "e", "f", "g", "h"];

export function splitTheList<T>(arr: T[], givenLength: number) {
  let firstPart = [];
  let secondPart = [];
  for (let i = 0; i < arr.length; i++) {
    if (i <= givenLength - 1) {
      firstPart.push(arr[i]);
    } else {
      secondPart.push(arr[i]);
    }
  }
  //   return [firstPart, secondPart];
  return { firstpart: firstPart, secondPart: secondPart };
}
// console.log(splitTheListt(arrr, 4));
