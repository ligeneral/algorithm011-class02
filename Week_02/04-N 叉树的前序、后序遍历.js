const preOrder = root => {
  const result = [];
  const traversal = node => {
    if (node) {
      result.push(node.val);
      node.children.forEach(child => traversal(child));

    }
  };
  traversal(root);
  return result;
};

const postOrder = root => {
  const result = [];
  const traversal = node => {
    if (node) {
      node.children.forEach(child => traversal(child));
      result.push(node.val);
    }
  };
  traversal(root);
  return result;
};
