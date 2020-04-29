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

const without = function (source, itemsToRemove) {
  let newArray = [...source];
  for (let i = 0; i < itemsToRemove.length; i++) {
    for (let j = 0; j < newArray.length; j++) {
      if (newArray[j] === itemsToRemove[i]) {
        newArray.splice([j], 1);
        j--;
      }
    }
  }
  return newArray;

}
console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(without([3, 4, 6, 5, 4, 5, 6, 4, 8], [6, 4]));
assertArraysEqual(without([1, 4, 3], [2, 4, 5]), [1, 3]);
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);