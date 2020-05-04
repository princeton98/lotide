const eqObjects = function (object1, object2) {
  let statement;
  numberOfKeys1 = Object.keys(object1);
  numberOfKeys2 = Object.keys(object2);
  if (numberOfKeys1.length === numberOfKeys2.length) {
    for (let key of numberOfKeys1) {
      if (object1[key] === object2[key]) {
        statement = true;
      }
      else if (typeof (object1[key] === "array") || typeof (object2[key]) === "array") {
        if (eqArrays(object1[key], object2[key]) === true) {
          statement = true;
        }
        else {
          statement = false;
          return statement
        }
      }

      else {
        statement = false
        return statement;
      }
    }
  } else {
    statement = false
    return statement;
  }
  return statement
}

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

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`😤😤😤 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
  else {
    console.log(`🤮🤮🤮 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
}
const ab = { a: "1", b: "2" }
const ba = { b: "2", a: "1" }
assertObjectsEqual(ab, ba);
module.exports = assertObjectsEqual;