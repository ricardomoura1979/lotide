
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
      if (actual[i] !== expected[i]){
        return false
      } 
    }
  } else {
    return false;

  }
  return true;
}



const without = function (source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newArray.push(source[i]);
    }
  }
  return newArray;
}


console.log(without([1, 2, 3], [1]));
console.log(without(['1', '2', '3'], [1, 2, '3']));

assertEqual(eqArrays(without([1, 2, 3], [1]), [2, 3]), true);