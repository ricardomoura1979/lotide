const assertEqual = require('../assertEqual');




assertEqual([1, 2, 3], [1, 2, 3]); // => true
assertEqual([1, 2, 3], [3, 2, 1]); // => false

assertEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertEqual(["1", "2", "3"], ["1", "2", 3]); // => false
assertEqual([1, 2, 3], [1, 2, 3], true); // => should PASS