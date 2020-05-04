const assertArraysEqual = require("../assertArraysEqual");


assertArraysEqual([1, 2, 2], [1, 2, 2]);
assertArraysEqual([1, 5, 2], [1, 5, 3])
assertArraysEqual([1] , [1, 2, 4]);
assertArraysEqual([1, 3] , [1, 3])