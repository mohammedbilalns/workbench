var findSecondMinimumValue = function (root) {
  let firstMin = root.val;
  let secondMin = Infinity;

  function dfs(node) {
    if (!node) return;
    if (node.val > firstMin && node.val < secondMin) {
      secondMin = node.val;
    }

    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);
  return secondMin == Infinity ? -1 : secondMin;
};
