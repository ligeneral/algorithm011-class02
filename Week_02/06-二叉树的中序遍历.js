const inOrderTraversal = root => {
  const result = [];
  const inOrder = node => {
    if (node) {
      inOrder(node.left);
      result.push(node.val);
      inOrder(node.right);
    }
  };
  inOrder(root);
  return result;
};