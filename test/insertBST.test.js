const chai = require('chai');
const insertBST = require('../problems/insertBST');
const BinarySearchTree = require('../dataStructures/BinarySearchTree');

const { expect } = chai;

const leftLeaf = new BinarySearchTree(1);
const rightLeaf = new BinarySearchTree(3);
const firstRight = new BinarySearchTree(7);
const firstLeft = new BinarySearchTree(2, leftLeaf, rightLeaf);
const root = new BinarySearchTree(4, firstLeft, firstRight);

describe('inserting a value in a binary search tree', function () {
  it('inserts a value at a valid position in BST', function () {
    insertBST(root, 5);
    expect(root.right.left).to.not.equal(null);
    expect(root.right.left.val).to.equal(5);
  });
});
