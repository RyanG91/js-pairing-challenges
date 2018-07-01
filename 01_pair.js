const countEvens=(arr) => {
  let count = 0
  for (x of arr){
    if (x%2 === 0) {
      count += 1
    }
  }
  return count
}

countEvens([1, 2, 3, 4, 5, 6, 7, 8])

// Test
const assert = require('assert');

describe('Find number of evens', () => {
  it('Counts evens numbers', () => {
    const list = [
      1,2,3,4,5
    ];
    const result = countEvens(list, 2);
    assert.equal(result, 2)
  })
// Different set of values:
  it('Counts evens numbers', () => {
    const list = [
      3,5,7,9,12
    ];
    const result = countEvens(list, 1);
    assert.equal(result, 1)
  })
// Empty Array
  it('Counts evens numbers', () => {
    const list = [];
    const result = countEvens(list, 0);
    assert.equal(result, 0)
  })
})
