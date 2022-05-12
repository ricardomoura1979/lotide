
const assert = require('chai').assert;
const head   = require('../tail');

describe("#tail", () => {
  
  it((' from "Yo Yo", "Lighthouse", "Labs", "Test" should returns "Test" for  Tail'), () => {
    assert.strictEqual(tail([0]), "Test"); 
  });

});



