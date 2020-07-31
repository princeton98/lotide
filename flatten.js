const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`😤😤😤 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤮🤮🤮 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
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

const flatten = function(array) {
  let newArr = [];
  for (let element of array) {
    if (element.isArray) {
      for (let number of element) {
        newArr.push(number);
      }
    }
    else {
      newArr.push(element);
    }
  }
  return newArr;
}

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]);