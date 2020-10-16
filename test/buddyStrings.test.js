const { expect } = require('chai');
const buddyStrings = require('../problems/buddyStrings');

describe('return true if you can swap two letters in A so the result is equal to B, otherwise, return false', function () {
  it('should swap ab to become ba', function () {
    const actual = buddyStrings('ab', 'ba');
    expect(actual).to.equal(true);
  });

  it('aa cant be swapped to become aa', function () {
    const actual = buddyStrings('aa', 'aa');
    expect(actual).to.equal(true);
  });

  it('should swap aaaaaaabc to become aaaaaaacb', function () {
    const actual = buddyStrings('aaaaaaabc', 'aaaaaaacb');
    expect(actual).to.equal(true);
  });

  it('empty string cant be swapped to become aa', function () {
    const actual = buddyStrings('', 'aa');
    expect(actual).to.equal(false);
  });
});
