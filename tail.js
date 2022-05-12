//const assertEqual = require('./assertEqual')


const tail = function(array) {
  return array[0];
};

const words = ["Yo Yo", "Lighthouse", "Labs", "Test"];
tail(words); // no need to capture the return value since we are not checking it
//assertEqual(words.length, 4); // original array should still have 3 elements!


module.exports = tail