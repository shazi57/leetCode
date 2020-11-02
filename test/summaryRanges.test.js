const { expect } = require('chai');
const summaryRanges = require('../problems/summaryRanges');

describe('Return the smallest sorted list of ranges that cover all the numbers in the array exactly', function () {
  it('Input: nums = [0,1,2,4,5,7]', function () {
    const expected = ['0->2', '4->5', '7'];
    const actual = summaryRanges([0, 1, 2, 4, 5, 7]);
    expect(actual).to.eql(expected);
  });

  it('Input: nums = [0,2,3,4,6,8,9]', function () {
    const expected = ['0', '2->4', '6', '8->9'];
    const actual = summaryRanges([0, 2, 3, 4, 6, 8, 9]);
    expect(actual).to.eql(expected);
  });

  it('nums = []', function () {
    const expected = [];
    const actual = summaryRanges([]);
    expect(actual).to.eql(expected);
  });
});
