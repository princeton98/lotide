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




const letterPositions = function(sentence) {
  const results = {};
  // let array = [];
  
  for (let i = 0; i < sentence.length; i++) {
    
    if (results[sentence[i]]) { // If letter has already been found
      results[sentence[i]].push(i);
    }    
    else if (sentence[i] === " ") {}
    else {
      let newArray = [];
      newArray.push(i)
      results[sentence[i]] = newArray;
      
    } 
  }
  return results;
}
assertArraysEqual(letterPositions("hello").e, [1]);
console.log(letterPositions("hello"));
console.log(letterPositions("how is the weather"));