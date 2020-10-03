class BinarySearchTree {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }

  toArray() {
    const treeToConvert = this;
    const array = [];
    const toArrayHelper = (tree) => {
      if (tree === null) {
        return;
      }
      array.push(tree.val);
      toArrayHelper(tree.left);
      toArrayHelper(tree.right);
    };

    toArrayHelper(treeToConvert);
    return array;
  }
}

module.exports = BinarySearchTree;
