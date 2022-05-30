const assertEqual = function(actual, expected) {
  const actual1 = actual;
  const expected1 = expected;
  if (actual === expected) {
    console.log(`"✅" + "Assertion Passed:  ${actual1}  === ${expected1}`);
  } else {
    console.log(`"🛑" + "Assertion Failed:  ${actual1}  !== ${expected1}`);
  }
};

const head = function(array)  {
  return array[0];
  

};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
//module.exports = head
//assertEqual was inserted to remake bootcamp tasks. After this, we have to insert module.exports above and delete this line and the assertEqual function.

