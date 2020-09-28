const sumOfArray = require('../problems/sumOfArray');
const chai = require('chai');

const expect = chai.expect;

describe('Sum of 1d array', () => {
  it('sum of empty array should be an empty array', () => {
    const actual = sumOfArray([]);
    const expected = [];
    expect(actual).to.eql(expected);
  })

  it('sum of [1,2,3] should be [1, 3, 6]', () => {
    const actual = sumOfArray([1,2,3]);
    const expected = [1,3,6];
    expect(actual).to.eql(expected);
  })

  it('sum of [0,0,0] should be [0, 0, 0]', () => {
    const actual = sumOfArray([0,0,0]);
    const expected = [0,0,0];
    expect(actual).to.eql(expected);
  })
})
