const assertEqual = require("../assertEqual");
const tail = require("../tail");
const assert = require("chai").assert

const words2 = ["Yo Yo", "Lighthouse", "Labs", "Partner", "Dream"];

describe("#tail", () => {
  it("returns undefined when given an empty array", () => {
    assert.strictEqual(tail([]), undefined);
  });
  it("returns 'Labs' when given an array called 'words'", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.strictEqual(tail(words), "Labs");
  });
  it("returns 'Dream' when given an array called 'words2'", () => {
    const words2 = ["Yo Yo", "Lighthouse", "Labs", "Partner", "Dream"];
    assert.strictEqual(tail(words2), "Dream");
  });
})
//assertEqual(tail(words), "Labs");
//assertEqual(tail(words2), "Dream");