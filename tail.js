//const assertEqual = require('./assertEqual')
const assertEqual = function(actual, expected) {
  const actual1 = actual;
  const expected1 = expected;
  if (actual === expected) {
    console.log(`"✅Assertion Passed:  ${actual1}  === ${expected1}`);
  } else {
    console.log(`"🛑Assertion Failed:  ${actual1}  !== ${expected1}`);

  }
   


};


const tail = function(array) {
  return array;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!


//module.exports = tail