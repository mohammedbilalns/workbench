var getAllElements = function (root1, root2) {
  function dfs(node = this.root, result = []) {
    if (node) {
      dfs(node.left, result);
      result.push(node.val);
      dfs(node.right, result);
    }
    return result;
  }

  let arr1 = dfs(root1);
  let arr2 = dfs(root2);
  return [...arr1, ...arr2].sort((a, b) => a - b);
};
