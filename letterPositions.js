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
module.exports = letterPositions;