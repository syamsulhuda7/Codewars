// // Instructions

// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// For example, the score of abad is 8 (1 + 2 + 1 + 4).
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(high("man i need a taxi up to ubud"), "taxi");
    assert.strictEqual(
      high("what time are we climbing up the volcano"),
      "volcano"
    );
    assert.strictEqual(high("take me to semynak"), "semynak");
    assert.strictEqual(high("aa b"), "aa");
    assert.strictEqual(high("b aa"), "b");
    assert.strictEqual(high("bb d"), "bb");
    assert.strictEqual(high("d bb"), "d");
    assert.strictEqual(high("aaa b"), "aaa");
  });
});

// Solution
function high(x) {
  const a = x.split(" ");

  const sumNumericValues = (string) =>
    string
      .toLowerCase()
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0) - 96, 0);

  const avalue = a.map(sumNumericValues);

  const result = avalue.reduce(
    (acc, val, idx) => (val > acc.max ? { max: val, maxIndex: idx } : acc),
    { max: -Infinity, maxIndex: -1 }
  );

  return a[result.maxIndex];
}
