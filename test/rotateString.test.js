const chai = require('chai');
const rotateString = require('../problems/rotateString');

const { expect } = chai;

describe('rotate String', function () {
  it('"abcde" should make two rotations to become "cdeab"', function () {
    expect(rotateString('abcde', 'cdeab')).to.be.true;
  });

  it('"abcde" should make 0 rotation to become "abcde"', function () {
    expect(rotateString('abcde', 'abcde')).to.be.true;
  });

  it('"abcde" cannot become "cedab"', function () {
    expect(rotateString('abcde', 'cedab')).to.be.false;
  });

  it('empty string should make 0 rotation to become empty string', function () {
    expect(rotateString('', '')).to.be.true;
  });

  it('empty string cannot be anything else other than empty string', function () {
    expect(rotateString('', 'a')).to.be.false;
  });
});
