const words = ["ground", "control", "to", "major", "tom"];
const callBack = (name) => {
  return name[0];

};

const map = function(array, callBack) {
  const results = [];
  for (let item of array) {
   
    results.push(callBack(item));
        
  }
  return results;

};
map(words, callBack);



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
      if (actual[i] !== expected[i]) {
        return false;
      }
    }
  } else {
    return false;

  }
  return true;
};

assertEqual(eqArrays(map(words, callBack), [ 'g', 'c', 't', 'm', 't' ]), true);


