// Instructions
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)
// Example: (input --> output)
// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

// Solution
function dnaStrand(dna){
    return dna.split('').map(x => {
      if (x === 'A') {
        return 'T'
      } else if (x === 'T') {
        return 'A'
      } else if (x === 'G') {
        return 'C'
      } else { return 'G'}
    }).join('')
  }

    console.log(dnaStrand('TTT'))