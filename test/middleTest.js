//const middle = require('../middle');
//const assertEqual = require('../assertArraysEqual'); */


const assert = require('chai').assert;
const middle   = require('../middle');

describe("#head", () => {
  
  it("returns empty []  for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns empty []  for [1, 2]", () => {
     assert.deepEqual(middle([1, 2]), []);
  }); 
  it("returns empty [2, 3]  for [2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("returns empty []  for [3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

});




