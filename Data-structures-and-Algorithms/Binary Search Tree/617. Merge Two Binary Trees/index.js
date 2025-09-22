var mergeTrees = function (root1, root2) {
  if (!root1) return root2;
  if (!root2) return root1;

  const mergedNode = new TreeNode(root1.val + root2.val);
  mergedNode.left = mergeTrees(root1.left, root2.left);
  mergedNode.right = mergeTrees(root1.right, root2.right);

  return mergedNode;
};
