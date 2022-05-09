/* const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log("✅✅✅" + "Assertion Passed" + "[" + actual + "] === [" + expected + "]");
  } else {
    console.log("🛑🛑🛑" + "Assertion Failed" + "[" + actual + "] !== [" + expected + "]");

  }
}; */
// {L : 2, h: 1}


const countLetters = (sentence) => {
  const letters = {};
  for (const key of sentence) {
    if (key !== ' '){ 
      if (letters[key]) {
      letters[key] += 1;
    } else {
      letters[key] = 1;
    }
    }
    
  } 

  return letters;
};


console.log(countLetters('LHL is a bootcamp'));