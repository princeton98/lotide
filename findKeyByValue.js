const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😤😤😤 Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(`🤮🤮🤮 Assertion Failed: ${actual} !== ${expected}`);
};

const findKeyByValue = function(input, value) {
  // scans object to find value
  // to get value, need key
  newInput = Object.keys(input)
  for (let key of newInput) {
    // console.log(input[key]);
    if (input[key] === value) {
      return key;
    }
    
    // use key to find value
  } 
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

 assertEqual((findKeyByValue(bestTVShowsByGenre, "The Wire")), 'drama');
 module.exports = findKeyByValue;