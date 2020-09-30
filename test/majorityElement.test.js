const { expect } = require('chai');
const majorityElement = require('../problems/majorityElement');

describe('majorityElement should find an element that appears more than 1/n times where n is the length of the array', function () {
  it('[3,2,3] should return [3]', function () {
    expect(majorityElement([3, 2, 3])).to.eql([3]);
  });

  it('[1] should return [1]', function () {
    expect(majorityElement([1])).to.eql([1]);
  });

  it('[1,2] should return [1,2]', function () {
    expect(majorityElement([1, 2])).to.eql([2, 1]);
  });
});
