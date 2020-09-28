const chai = require('chai');
const kidsWithCandies = require('../problems/kidsWithCandies');

const { expect } = chai;

describe('kidsWithCandies', function () {
  it('kidsWithCandies [2,3,5,1,3] and extra candies of 3 should be [true, true, true, false, true]', function () {
    const actual = kidsWithCandies([2, 3, 5, 1, 3], 3);
    const expected = [true, true, true, false, true];
    expect(actual).to.eql(expected);
  });

  it('kidsWithCandies [1,1,1,1,1] and extra candies of 0 should be [true, true, true, true, ,true]', function () {
    const actual = kidsWithCandies([1, 1, 1, 1, 1], 0);
    const expected = [true, true, true, true, true];
    expect(actual).to.eql(expected);
  });

  it('kidsWithCandies [] and extra candies of 0  should be []', function () {
    const actual = kidsWithCandies([], 0);
    const expected = [];
    expect(actual).to.eql(expected);
  });
});
