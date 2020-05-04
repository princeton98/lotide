const middle = require("../middle");
// const assertArraysEqual = require("../assertArraysEqual");
const assert = require("chai").assert

describe("#middle", () => {
  it("should return an empty array when length of array is less than or equal to 2", () =>{
    assert.deepEqual(middle([1, 2]), []);
  });
  it("should return '[2]' when given an array of '[1, 2, 3]'", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("should return '[2, 3]' when given an array of '[1, 2, 3, 4]'", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  })
})