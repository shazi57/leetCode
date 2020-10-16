const { expect } = require('chai');
const rotate = require('../problems/rotate');

describe('Given an array, rotate the array to the right by k steps, where k is non-negative.', function () {
  it('nums = [1,2,3,4,5,6,7], k = 3', function () {
    const expected = [5, 6, 7, 1, 2, 3, 4];
    const actual = rotate([1, 2, 3, 4, 5, 6, 7], 3);
    expect(expected).to.eql(actual);
  });

  it('nums = [-1, -100, 3, 99], k = 2', function () {
    const expected = [3, 99, -1, -100];
    const actual = rotate([-1, -100, 3, 99], 2);
    expect(expected).to.eql(actual);
  });

  it('nums = [1], k = 100', function () {
    const expected = [1];
    const actual = rotate([1], 100);
    expect(expected).to.eql(actual);
  });
});
