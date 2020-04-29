const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😤😤😤 Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(`🤮🤮🤮 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(word) {
  //input count of letters into new object
  totalLetters = {};
  //Takes in string, return count of letters
  // Goes through each individual letter of sentence
  for (letter of word) {
    if (totalLetters[letter]){
      totalLetters[letter] += 1;
    } else if (letter === " ") {
    } else {
      totalLetters[letter] = 1;  
    }
  }
  return totalLetters;
}
console.log(countLetters("rewarding is easy"));
console.log(countLetters(" how is the weather outside"));
console.log(countLetters("lighthouse in the house"));