// const assertEqual = function(actual, expected) {

  
//   if (actual === expected) {
//     console.log("✅✅✅" + "Assertion Passed" + "[" + actual + "] === [" + expected + "]");
//   } else {
//     console.log("🛑🛑🛑" + "Assertion Failed" + "[" + actual + "] !== [" + expected + "]");

//   }
// };
// const eqArrays = function(actual, expected) {
//   if (actual.length === expected.length) {
//     for (let i = 0; i < actual.length; i++) {
//       if (actual[i] !== expected[i]){
//         return false
//       }
//     }
//   } else {
//     return false;

//   }
//   return true;
// }
const middle = function(array) {
  let middleArray = [];
  if (array.length <= 2) {
    return middleArray;
  } else if (array.length % 2 !== 0) {
    // console.log(array[(array.length - 1)/2])
    middleArray.push(array[(array.length - 1) / 2]);
  } else {
    middleArray.push(array[(array.length - 2) / 2]);
    middleArray.push(array[array.length / 2]);
  }
  return middleArray;
};

// console.log(middle([1,2])); // when length is equal to 2
//console.log(middle([1,2,3,4,5,6,7,8])); // even [4,5]
// console.log(middle([1,2,3,4])); //even

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]