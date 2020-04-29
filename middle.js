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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`😤😤😤 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤮🤮🤮 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const middle = function(array) {
  let midArray = [];
  // array < 2, return empty array
  if (array.length <= 2) {
    return midArray;
  }
  // odd number of elements, one elemnt returned
  if (array.length % 2 !== 0) {
    midArray.push(array[(Math.round(array.length / 2)) - 1]);
    return midArray;
  }
  // even number of elements, two elements returned
  if (array.length % 2 === 0) {
    midArray.push(array[array.length / 2 - 1]);
    midArray.push(array[array.length / 2]);
    return midArray;
  }
};
console.log(middle([1]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 3, 4, 5, 2, 1, 3, 6, 3]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([3, 4, 1, 2, 3, 4]));
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), middle([6, 7, 8, 9, 10, 11]));
assertArraysEqual(middle([1, 2, 2, 3, 5, 6]), middle([6, 7, 2, 3, 10, 11]));