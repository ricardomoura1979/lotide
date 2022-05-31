//const assertEqual = require('./assertEqual') // we are gonna implement this part further.


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




//module.exports = assertEqual;// we are gonna implement this part further.