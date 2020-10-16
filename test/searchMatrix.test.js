const { expect } = require('chai');
const searchMatrix = require('../problems/searchMatrix');

describe('Write an efficient algorithm that searches for a value in an m x n matrix.', function () {
  it('[[1,3,5,7],[10,11,16,20],[23,30,34,50]] target 3', function () {
    const mat = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]];
    const actual = searchMatrix(mat, 3);
    expect(actual).to.be.true;
  });

  it('[[1,3,5,7],[10,11,16,20],[23,30,34,50]] target 13', function () {
    const mat = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]];
    const actual = searchMatrix(mat, 13);
    expect(actual).to.be.false;
  });

  it('[[]], target 2', function () {
    const mat = [[]];
    const actual = searchMatrix(mat, 2);
    expect(actual).to.be.false;
  });

  it('[[0], [2], [4], [5], [13], [27]], target 27', function () {
    const mat = [[0], [2], [4], [5], [13], [27]];
    const actual = searchMatrix(mat, 27);
    expect(actual).to.be.true;
  });

  it('[[0, 2, 4, 5, 13, 27]], target 27', function () {
    const mat = [[0, 2, 4, 5, 13, 27]];
    const actual = searchMatrix(mat, 5);
    expect(actual).to.be.true;
  });
});
