const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`😤😤😤 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤮🤮🤮 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (array1, array2) {
  let counter = 0;
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        counter += 1;
      }
    }
  }
  if (counter === array1.length) {
    return true;
  } else return false;
};




const takeUntil = function (array, callback) {
  let results = [];
  for (let element of array) {
    if (callback(element)) {
      return results;
    } else {
      results.push(element);
    }
  } return results;
}

//test
const data1 = [1, 2, 5, 7, 2, 1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2])
console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"]);
module.exports = takeUntil;