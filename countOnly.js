const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log("✅✅✅" + "Assertion Passed" + "[" + actual + "] === [" + expected + "]");
  } else {
    console.log("🛑🛑🛑" + "Assertion Failed" + "[" + actual + "] !== [" + expected + "]");

  }



};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];



const countOnly = function(allItems, itemsToCount) {
  let output = {};
  for (const item of allItems) {
    // console.log(item["karl"])
    //
    // if this item is a key in itemsToCount object
    if (itemsToCount[item]) {
      if (output[item]){
        //console.log(output[item])
        output[item] +=1
      }
      else{
        //console.log(output[item])
        output[item] = 1
      }
      
    }
  }
  

return output
}

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
//console.log(result1)
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined); 


/*
OUTPUT
Karl
Salima
Agouhanna
Fang
Kavith
Jason
Salima
Fang
Joe */