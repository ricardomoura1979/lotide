
const assertEqual = function(actual, expected) {
  const actual1 = actual;
  const expected1 = expected;
  if (actual === expected) {
    console.log(`"✅Assertion Passed:  ${actual1}  === ${expected1}`);
  } else {
    console.log(`"🛑Assertion Failed:  ${actual1}  !== ${expected1}`);

  }

};



const findKey = function(obj, callback) {
  for (let element in obj) {
    if (callback(obj[element]) === true) {
      return element;
    }
  }
};

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)) // => "noma"

//module.exports = findKey;