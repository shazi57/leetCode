const { expect } = require('chai');
const bulbSwtich = require('../problems/bulbSwitch');

describe('Find how many bulbs are on after n rounds.', function () {
  it('first round', function () {
    const expected = 1;
    const actual = bulbSwtich(1);
    expect(expected).to.equal(actual);
  });

  it('second round', function () {
    const expected = 1;
    const actual = bulbSwtich(2);
    expect(expected).to.equal(actual);
  });

  it('third round', function () {
    const expected = 1;
    const actual = bulbSwtich(3);
    expect(expected).to.equal(actual);
  });

  it('fourth round', function () {
    const expected = 2;
    const actual = bulbSwtich(4);
    expect(expected).to.equal(actual);
  });

  it('fifth round', function () {
    const expected = 2;
    const actual = bulbSwtich(5);
    expect(expected).to.equal(actual);
  });
});
