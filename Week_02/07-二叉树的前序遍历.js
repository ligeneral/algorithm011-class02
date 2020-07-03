const preOrderTraversal = root => {
  const result = [];
  const preOrder = node => {
    if (node) {
      result.push(node.val);
      preOrder(node.left);
      preOrder(node.right);
    }
  };
  preOrder(root);
  return result;
};