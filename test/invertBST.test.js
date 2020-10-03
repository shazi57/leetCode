const { expect } = require('chai');
const BinarySearchTree = require('../dataStructures/BinarySearchTree');
const invertBST = require('../problems/invertBST');

describe('our engineers use the software you wrote, but you cannot invert a BST on a whiteboard so fuck off', function () {
  const originalBST = new BinarySearchTree(4,
    new BinarySearchTree(2,
      new BinarySearchTree(1),
      new BinarySearchTree(3)),
    new BinarySearchTree(7,
      new BinarySearchTree(6),
      new BinarySearchTree(9)));

  const invertedBST = new BinarySearchTree(4,
    new BinarySearchTree(7,
      new BinarySearchTree(9),
      new BinarySearchTree(6)),
    new BinarySearchTree(2,
      new BinarySearchTree(3),
      new BinarySearchTree(1)));

  it('testing BST toArray Method', function () {
    const expected = [4, 2, 1, 3, 7, 6, 9];
    const expected2 = [4, 7, 9, 6, 2, 3, 1];

    const actual = originalBST.toArray();
    const actual2 = invertedBST.toArray();
    expect(actual).to.eql(expected);
    expect(actual2).to.eql(expected2);
  });

  it('invertBST should correctly invert binary search tree', function () {
    const expected = invertedBST.toArray();
    const invertedTree = invertBST(originalBST);

    expect(invertedTree.toArray()).to.eql(expected);
  });
});
