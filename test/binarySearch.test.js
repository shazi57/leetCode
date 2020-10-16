const { expect } = require('chai');
const binarySearch = require('../problems/binarySearch');

describe('search target in nums. If target exists, then return its index, otherwise return -1', function () {
  it('should return -1 for an empty array', function () {
    const expected = -1;
    const actual = binarySearch([], 3);
    expect(actual).to.equal(expected);
  });

  it('should return right index if target is found in the array', function () {
    const expected = 4;
    const actual = binarySearch([-1, 0, 3, 5, 9, 12], 9);
    expect(actual).to.equal(expected);
  });

  it('should return -1 if target does not exist in the array', function () {
    const expected = -1;
    const actual = binarySearch([-1, 0, 3, 5, 9, 12], 2);
    expect(actual).to.equal(expected);
  });
});
