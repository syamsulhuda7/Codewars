// // Instructions
// Write a function which reduces fractions to their simplest form! Fractions will be presented as an array/tuple (depending on the language) of strictly positive integers, and the reduced fraction must be returned as an array/tuple:
// input:   [numerator, denominator]
// output:  [reduced numerator, reduced denominator]
// example: [45, 120] --> [3, 8]
// All numerators and denominators will be positive integers.
// Note: This is an introductory Kata for a series... coming soon!

const { assert } = require("chai");

const test = (input, expected, message) => {
  assert.deepEqual(reduce(input), expected, message);
};

describe("reduce()", () => {
  it("basic tests", () => {
    const tests = [
      [
        [60, 20],
        [3, 1],
      ],
      [
        [80, 120],
        [2, 3],
      ],
      [
        [4, 2],
        [2, 1],
      ],
      [
        [45, 120],
        [3, 8],
      ],
      [
        [1000, 1],
        [1000, 1],
      ],
      [
        [1, 1],
        [1, 1],
      ],
    ];

    for (const [input, expected] of tests) {
      test(input, expected);
    }
  });
});

// Solutions
function reduce(fraction) {
  const gcd = (x, y) => {
    while (y !== 0) {
      let temp = y;
      y = x % y;
      x = temp;
    }
    return x;
  };
  const findGCD = (numbers) =>
    numbers.reduce((acc, number) => gcd(acc, number));
  const resultGCD = findGCD(fraction);
  return [fraction[0] / resultGCD, fraction[1] / resultGCD];
}
