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


module.exports = eqObjects;