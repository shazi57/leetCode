const { expect } = require('chai');
const findPairs = require('../problems/findPairs');

describe('find pairs shoudl find all unique pairs where difference is k ', function () {
  it('should return 0 when array is empty', function () {
    const expected = 0;
    const actual = findPairs([], 3);
    expect(actual).to.equal(expected);
  });

  it('there is one 0-diff pair in the array [1,3,1,5,4]', function () {
    const expected = 1;
    const actual = findPairs([1, 3, 1, 5, 4], 0);
    expect(actual).to.equal(expected);
  });

  it('There is two 1-diff pair in the array [-1, -2, -3]', function () {
    const expected = 2;
    const actual = findPairs([-1, -2, -3], 1);
    expect(actual).to.equal(expected);
  });

  it('There are four 1-diff pair in the array [1,2,3,4,5]', function () {
    const expected = 4;
    const actual = findPairs([1, 2, 3, 4, 5], 1);
    expect(actual).to.equal(expected);
  });

  it('Thare are two 2-diff pair in the array [3, 1, 4, 1, 5]', function () {
    const expected = 2;
    const actual = findPairs([3, 1, 4, 1, 5], 2);
    expect(actual).to.equal(expected);
  });
});
