const eqObjects = require("../eqObjects");
const assert = require("chai").assert;
const ab = { a: "2", b: "2" }
const ba = { b: "2", a: "2" }
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

describe("#eqObjects", () => {
  it("return true when inputting the two parameters 'ab','ba'", () => {
    assert.deepEqual(eqObjects(ab, ba), true);
  });
  it("return false when inputting the two parameters 'ab','abc'", () => {
    assert.deepEqual(eqObjects(ab, abc), false);
  });
  it("return true when inputting the two parameters 'cd','dc'", () => {
    assert.deepEqual(eqObjects(cd, dc), true);
  });
  it("return false when inputting the two parameters 'cd','cd2'", () => {
    assert.deepEqual(eqObjects(cd, cd2), false);
  });
})