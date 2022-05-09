const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log("✅✅✅" + "Assertion Passed" + "[" + actual + "] === [" + expected + "]");
  } else {
    console.log("🛑🛑🛑" + "Assertion Failed" + "[" + actual + "] !== [" + expected + "]");

  }

};
const tail = function(array) {
  return array;
};

const words = ["Yo Yo", "Lighthouse", "Labs", "Test"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 4); // original array should still have 3 elements!