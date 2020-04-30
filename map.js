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



const words = ["ground", "control", "to", "major", "tom"];
const map = function (array, callback) {
  const results = []
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const results1 = map(words, word => word[0]);
console.log(results1);

//testing 
assertArraysEqual(map(["happy", "lucky", "jumpy", "caddy", "laddy"], word => word[2]), ['p', 'c', 'm', 'd', 'd']);