// // Instructions
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Additionally, if the number is negative, return 0.
// Note: If the number is a multiple of both 3 and 5, only count it once.

const { assert } = require("chai")

function test(n, expected) {
  it(`n=${n}`, () => {  
    let actual = solution(n)
    assert.strictEqual(actual, expected)
  })
}

describe("basic tests", function(){
  test(10,23)
})


// Solution
function solution(number) {
    if (number < 0) {
      return 0
    } else {
      let mod3 = [];
      for (let i = 1; i < number; i++) {
          if (i % 3 === 0) {
              mod3.push(i);
          }
      }
      
      let mod5 = [];
      for (let i = 1; i < number; i++) {
          if (i % 5 === 0) {
              mod3.push(i);
          }
      }
      
      function mergeAndRemoveDuplicates(a, b) {
        const c = a.concat(b);
        const uniqueSet = new Set(c);
        const uniqueArray = Array.from(uniqueSet);
        return uniqueArray;
      }
      
    return mergeAndRemoveDuplicates(mod3,mod5).reduce((a,b) => (a + b), 0)
    }
  }