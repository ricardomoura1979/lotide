const assertEqual = function(actual, expected) {
  const actual1 = actual;
  const expected1 = expected;
  if (actual === expected) {
    console.log(`"✅Assertion Passed:  ${actual1}  === ${expected1}`);
  } else {
    console.log(`"🛑Assertion Failed:  ${actual1}  !== ${expected1}`);

  }
   


}; 



// TEST CODE
//module.exports = assertEqual;

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(2, "2");
assertEqual("m", "m");
