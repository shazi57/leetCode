const chai = require('chai');
const sumOfArray = require('../problems/sumOfArray');

const { expect } = chai;

describe('Sum of 1d array', function () {
  it('sum of empty array should be an empty array', function () {
    const actual = sumOfArray([]);
    const expected = [];
    expect(actual).to.eql(expected);
  });

  it('sum of [1,2,3] should be [1, 3, 6]', function () {
    const actual = sumOfArray([1, 2, 3]);
    const expected = [1, 3, 6];
    expect(actual).to.eql(expected);
  });

  it('sum of [0,0,0] should be [0, 0, 0]', function () {
    const actual = sumOfArray([0, 0, 0]);
    const expected = [0, 0, 0];
    expect(actual).to.eql(expected);
  });

  it('sum of [1,2,3,4] should be [1,3,6,10]', function () {
    const actual = sumOfArray([1, 2, 3, 4]);
    const expected = [1, 3, 6, 10];
    expect(actual).to.eql(expected);
  });
});
