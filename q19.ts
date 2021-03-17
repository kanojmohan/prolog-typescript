import { splitTheList } from "./q17";

const arree = ["a", "b", "c", "d", "e", "f", "g", "h"];

// function splitTheLists(arr: any[], givenLength: number) {
//   let firstPart = [];
//   let secondPart = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i <= givenLength) {
//       firstPart.push(arr[i]);
//     } else {
//       secondPart.push(arr[i]);
//     }
//   }
//   //   return [firstPart, secondPart];
//   return { firstpart: firstPart, secondPart: secondPart };
// }

export function rotateNLeft<T>(arrRotate: T[], nthPlace: number) {
  const temp = splitTheList(arrRotate, nthPlace);
  return [...temp.secondPart, ...temp.firstpart];
}
console.log(rotateNLeft(arree, 3));

// module.exports = { splitTheLists };
