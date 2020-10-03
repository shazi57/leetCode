const invertBST = (root) => {
  const invertHelper = (tree) => {
    if (tree === null) {
      return;
    }
    const tempTree = tree.left;
    tree.left = tree.right;
    tree.right = tempTree;

    invertHelper(tree.left);
    invertHelper(tree.right);
  };
  invertHelper(root);
  return root;
};

module.exports = invertBST;
