// REINSERTED assertEqual function. After, it will be necessary to remove again. When exporting this file as module.
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


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false



//module.exports = eqArrays; // this module must to be reinserted when we learn how to do it.

