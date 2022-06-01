
const assertEqual = function(actual, expected) {
  const actual1 = actual;
  const expected1 = expected;
  if (actual === expected) {
    console.log(`"✅Assertion Passed:  ${actual1}  === ${expected1}`);
  } else {
    console.log(`"🛑Assertion Failed:  ${actual1}  !== ${expected1}`);

  }
   

}; 



const eqArrays = function(actual, expected) {
  if (actual.length === expected.length) {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]){
        return false
      } 
    }
  } else {
    return false;

  }
  return true;
}

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




console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4] 

//module.exports = middle // we are gonna export in the future