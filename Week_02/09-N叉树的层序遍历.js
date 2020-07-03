const levelOrder = root => {
  const result = [];
  const __levelOrder = (node, k) => {
    if (node === null) {
      return;
    }
    if (result[k] === undefined) {
      result[k] = [];
    }
    result[k].push(node.val);
    for (let i = 0; i < node.children.length; i++) {
      __levelOrder(result, node.children[i], k + 1);
    }
  };

  __levelOrder(root, 0);
  return result;
};
