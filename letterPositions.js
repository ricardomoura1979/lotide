

const assertEqual = function(actual, expected) {

  
  if (actual === expected) {
    console.log("✅✅✅" + "Assertion Passed" + "[" + actual + "] === [" + expected + "]");
  } else {
    console.log("🛑🛑🛑" + "Assertion Failed" + "[" + actual + "] !== [" + expected + "]");

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




const letterPositions = (sentence) => {
  const letters = {};
  for (const key of sentence) {
    if (key !== ' '){ 
      if (letters[key]) {
      letters[key] += 1;
    } else {
      letters[key] = 1;
    }
    }
    
  } 

  return letters;
};

console.log(assertEqual(eqArrays(letterPositions("hello").e, [1])));
console.log(letterPositions('hello'));
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => should PASS 