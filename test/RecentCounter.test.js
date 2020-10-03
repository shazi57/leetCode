const { expect } = require('chai');
const RecentCounter = require('../problems/RecentCounter');

describe('RecentCounter calss counts the number of recent requests within a certian time frame', function () {
  it('requests should be empty when class is instantiated', function () {
    const recentCounter = new RecentCounter();
    expect(recentCounter.requests).to.eql([]);
  });

  it('subsequent requests should increment the count only if theres intersections between intervals', function () {
    const recentCounter = new RecentCounter();
    expect(recentCounter.requests).to.eql([]);
    expect(recentCounter.ping(1)).to.equal(1);
    expect(recentCounter.requests).to.eql([1]);
    expect(recentCounter.ping(100)).to.equal(2);
    expect(recentCounter.requests).to.eql([1, 100]);
    expect(recentCounter.ping(3001)).to.equal(3);
    expect(recentCounter.requests).to.eql([1, 100, 3001]);
    expect(recentCounter.ping(3002)).to.equal(3);
    expect(recentCounter.requests).to.eql([1, 100, 3001, 3002]);
  });
});
