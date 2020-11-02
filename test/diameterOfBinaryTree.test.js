const { expect } = require('chai');
const BinarySearchTree = require('../dataStructures/BinarySearchTree');
const diameterOfBinaryTree = require('../problems/diameterOfBinaryTree');

describe('Given a binary tree, you need to compute the length of the diameter of the tree.', function () {
  it('Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].', function () {
    const tree = new BinarySearchTree(1,
      new BinarySearchTree(2,
        new BinarySearchTree(4),
        new BinarySearchTree(5)),
      new BinarySearchTree(3));
    const expected = 3;
    const actual = diameterOfBinaryTree(tree);
    expect(actual).to.equal(expected);
  });
});
