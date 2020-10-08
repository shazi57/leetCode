const { expect } = require('chai');
const removeCoveredIntervals = require('../problems/removeCoveredIntervals');

describe('remove all intervals that are covered by another interval in the list', function () {
  it('should return 2 for the intervals [[1,4],[3,6],[2,8]]', function () {
    const actual = removeCoveredIntervals([[1, 4], [3, 6], [2, 8]]);
    const expected = 2;
    expect(actual).to.equal(expected);
  });

  it('should return 2 for the intervals [[0,10],[5,12]', function () {
    const actual = removeCoveredIntervals([[0, 10], [5, 12]]);
    const expected = 2;
    expect(actual).to.equal(expected);
  });

  it('should return 2 for the intervals [[1,4],[2,3]]', function () {
    const actual = removeCoveredIntervals([[1, 4], [2, 3]]);
    const expected = 1;
    expect(actual).to.equal(expected);
  });

  it('should return 2 for the intervals [[3,10],[4,10],[5,11]]', function () {
    const actual = removeCoveredIntervals([[3, 10], [4, 10], [5, 11]]);
    const expected = 2;
    expect(actual).to.equal(expected);
  });
});
