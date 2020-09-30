const BinarySearchTree = require('../dataStructures/BinarySearchTree');

const insertBST = (root, val) => {
  if (!root) {
    return new BinarySearchTree(val);
  }

  if (val > root.val) {
    root.right = insertBST(root.right, val);
  } else {
    root.left = insertBST(root.left, val);
  }

  return root;
};

/*
const insertBST = (root, val) => {

  if (root.left === null && root.right === null) {
    if (val > root.val) {
      root.right = new BinarySearchTree(val);
    } else {
      root.left = new BinarySearchTree(val);
    }
  } else if (root.left === null) {
    if (val < root.val) {
      root.left = new BinarySearchTree(val);
    } else {
      insertBST(root.right, val);
    }
  } else if (root.right === null) {
    if (val > root.val) {
      root.right = new BinarySearchTree(val);
    } else {
      insertBST(root.left, val);
    }
  } else {
    if (val > root.val) {
      insertBST(root.left, val);
    } else {
      insertBST(root.right, val);
    }
  }
};
*/

module.exports = insertBST;
