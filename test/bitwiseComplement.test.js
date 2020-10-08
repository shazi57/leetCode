const { expect } = require('chai');
const bitwiseComplement = require('../problems/bitwiseComplement');

describe("For a given number N in base-10, return the complement of it's binary representation as a base-10 integer.", function () {
  it("101's complement is 010 which is 2 in base-10", function () {
    const actual = bitwiseComplement(5);
    const expected = 2;
    expect(actual).to.equal(expected);
  });

  it("111's complement is 000 which is 0 in base-10", function () {
    const actual = bitwiseComplement(7);
    const expected = 0;
    expect(actual).to.equal(expected);
  });

  it("1010's complement is 0101 which is 5 in base-10", function () {
    const actual = bitwiseComplement(10);
    const expected = 5;
    expect(actual).to.equal(expected);
  });
});
