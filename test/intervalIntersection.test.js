const { expect } = require('chai');
const intervalIntersection = require('../problems/intervalIntersection');

describe('intervalIntersections should find valid intersections', function () {
  it('if any of input is empty list, the answer should be empty list too', function () {
    expect(intervalIntersection([], [1, 5])).to.eql([]);
    expect(intervalIntersection([1, 5], [])).to.eql([]);
    expect(intervalIntersection([], [])).to.eql([]);
  });

  it('should return correct intersections', function () {
    const intervalA = [[0, 2], [5, 10], [13, 23], [24, 25]];
    const intervalB = [[1, 5], [8, 12], [15, 24], [25, 26]];
    const expected = [[1, 2], [5, 5], [8, 10], [15, 23], [24, 24], [25, 25]];
    expect(intervalIntersection(intervalA, intervalB)).to.eql(expected);
  });

  it('should return correct intersections-2', function () {
    const intervalA = [[3, 5], [9, 20]];
    const intervalB = [[4, 5], [7, 10], [11, 12], [14, 15], [16, 20]];
    const expected = [[4, 5], [9, 10], [11, 12], [14, 15], [16, 20]];
    expect(intervalIntersection(intervalA, intervalB)).to.eql(expected);
  });
});
