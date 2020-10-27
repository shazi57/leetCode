const { expect } = require('chai');
const kthFactor = require('../problems/kthFactor');

describe('Consider a list of all factors of n sorted in ascending order, return the kth factor in this list or return -1 if n has less than k factors.', function () {
  it('Input: n = 12, k = 3', function () {
    const actual = kthFactor(12, 3);
    const expected = 3;
    expect(expected).to.equal(actual);
  });

  it('Input: n = 7, k = 2', function () {
    const actual = kthFactor(7, 2);
    const expected = 7;
    expect(expected).to.equal(actual);
  });

  it('Input: n = 4, k = 4', function () {
    const actual = kthFactor(4, 4);
    const expected = -1;
    expect(expected).to.equal(actual);
  });
});
