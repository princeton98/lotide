const findKeyByValue = require("../findKeyByValue");
const assert = require("chai").assert

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe("#findKeyByValue", () => {
  it("return 'drama' when inputting bestTVShowsByGenre, 'The Wire'", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("return undefined when inputting bestTVShowsByGenre, ''", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, ""), undefined);
  })
  it("return 'comedy' when inputting bestTVShowsByGenre, 'Brooklyn Nine-Nine'", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
  });
  })