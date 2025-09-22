var isBalanced = function (root) {
  if (!root) return true;
  function getHeight(node) {
    if (!node) return 0;
    return 1 + Math.max(getHeight(node.left), getHeight(node.right));
  }

  if (Math.abs(getHeight(root.left) - getHeight(root.right)) > 1) {
    return false;
  }

  return isBalanced(root.left) && isBalanced(root.right);
};
