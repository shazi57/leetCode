const { expect } = require('chai');
const combinationSum = require('../problems/combinationSum');

describe('a list of all unique combinations of candidates that sum to the target', function () {
  it('when candidates is [2,3,6,7] there are two combinations that sum to the target 7', function () {
    const expected = [[2, 2, 3], [7]];
    const actual = combinationSum([2, 3, 6, 7], 7);
    expect(actual).to.eql(expected);
  });

  it('when candidates is [2] there are no combinations that sum to the target 1', function () {
    const expected = [];
    const actual = combinationSum([2], 1);
    expect(actual).to.eql(expected);
  });

  it('when candidates is [1] there are 1 combinations that sum to the target 1', function () {
    const expected = [[1]];
    const actual = combinationSum([1], 1);2,
    expect(actual).to.eql(expected);
  });

  it('when candidates is [1] there are 1 combinations that sum to the target 2', function () {
    const expected = [[1, 1]];
    const actual = combinationSum([1], 2);
    expect(actual).to.eql(expected);
  });
});
