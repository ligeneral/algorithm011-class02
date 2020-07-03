const postOrderTraversal = function(root) {
  const result = [];
  const postOrder = node => {
    if (node) {
      postOrder(node.left);
      postOrder(node.right);
      result.push(node.val);
    }
  };
  postOrder(root);
  return result;
};