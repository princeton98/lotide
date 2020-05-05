const letterPositions = require("../letterPositions");
const assert = require("chai").assert

describe("letterPosition#", () => {
  it("return ['1'] when inputting the word 'hello'", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });
  it("return ['2'] when inputting the word 'friend'", () => {
    assert.deepEqual(letterPositions("friend").i, [2]);
  });
  it("return empty object when inputting an empty word", () => {
    assert.deepEqual(letterPositions(""), {});
  })
})