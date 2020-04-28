

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`😤😤😤 Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(`🤮🤮🤮 Assertion Failed: ${actual} !== ${expected}`);
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

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

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`😤😤😤 Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🤮🤮🤮 Assertion Failed: ${array1} !== ${array2}`);
  }
}

assertArraysEqual([1, 2, 2], [1, 2, 2]);

console.log(eqArrays([1, 4, 2], [5, 4, 2]));
console.log(eqArrays([1, 2, 3], [3, 2, 1]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);