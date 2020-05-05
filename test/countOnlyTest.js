const countOnly = require("../countOnly");
const assert = require("chai").assert;
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
describe("#middle", () => {
  it("should return '1' when inputted ['Jason']", () => {
    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true })
    assert.deepEqual(result1["Jason"], 1);
  });
  it("should return undefined when inputted ['Karima']", () => {
    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true })
    assert.deepEqual(result1["Karima"], undefined);
  });
  it("should return '2' when inputted ['Fang']", () => {
    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true })
    assert.deepEqual(result1["Fang"], 2);
  });
})