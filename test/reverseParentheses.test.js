const { expect } = require('chai');
const reverseParentheses = require('../problems/reverseParentheses');

describe('Reverse the strings in each pair of matching parentheses, starting from the innermost one.', function () {
  it('(abcd)', function () {
    const expected = 'dcba';
    const actual = reverseParentheses('(abcd)');
    expect(actual).to.equal(expected);
  });

  it('(u(love)i)', function () {
    const expected = 'iloveu';
    const actual = reverseParentheses('(u(love)i)');
    expect(actual).to.equal(expected);
  });

  it('(ed(et(oc))el)', function () {
    const expected = 'leetcode';
    const actual = reverseParentheses('(ed(et(oc))el)');
    expect(actual).to.equal(expected);
  });

  it('a(bcdefghijkl(mno)p)q', function () {
    const expected = 'apmnolkjihgfedcbq';
    const actual = reverseParentheses('a(bcdefghijkl(mno)p)q');
    expect(actual).to.equal(expected);
  });
});
