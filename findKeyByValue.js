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
 module.exports = findKeyByValue;