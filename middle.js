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

module.exports = middle