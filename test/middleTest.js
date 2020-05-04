const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 3, 4, 5, 2, 1, 3, 6, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), middle([6, 7, 8, 9, 10, 11]));
assertArraysEqual(middle([1, 2, 2, 3, 5, 6]), middle([6, 7, 2, 3, 10, 11]));