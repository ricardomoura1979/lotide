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



module.exports = middle