const { expect } = require('chai');
const letterCasePermutation = require('../problems/letterCasePermutation');

describe('Return a list of all possible strings we could create. You can return the output in any order.', function () {
  it('Input: S = "a1b2"', function () {
    const expected = ['a1b2', 'a1B2', 'A1b2', 'A1B2'];
    const actual = letterCasePermutation('a1b2');
    expect(actual).to.eql(expected);
  });

  it('Input: S = "3z4"', function () {
    const expected = ['3z4', '3Z4'];
    const actual = letterCasePermutation('3z4');
    expect(actual).to.eql(expected);
  });

  it('Input: S = "12345"', function () {
    const expected = ['12345'];
    const actual = letterCasePermutation('12345');
    expect(actual).to.eql(expected);
  });
});
