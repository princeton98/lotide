const eqArrays = require("./eqArrays");
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
module.exports = eqObjects;
