const middle = require('../middle');
const assertEqual = require('../assertArraysEqual');






console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]