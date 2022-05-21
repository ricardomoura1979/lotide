const eqObjects = function(object1, object2) {
  
  if (Object.keys(object1).length !== Object.keys(object2).length) {
      return false;
    }
    for (let x of Object.keys(object1)) {
      
      if (Array.isArray(object1[x]) && Array.isArray(object2[x])) { 
        return eqArrays(object1[x], object2[x]) 
      }
      if (object1[x] !== object2[x]) {
        return false; 
      }
  }
  return true; 
};

const assertObjectsEqual = function(object1, object2) {
  
  const inspect = require('util').inspect;
  
  let returnResult = eqObjects(object1, object2);
  
  if (returnResult) {
    return console.log(`🟢 Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    return console.log(`🔥 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};