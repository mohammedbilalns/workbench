var constructMaximumBinaryTree = function (nums) {
  if (nums.length == 0) return null;
  let maxIndex = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[maxIndex]) {
      maxIndex = i;
    }
  }

  let root = new TreeNode(nums[maxIndex]);

  root.left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
  root.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1));

  return root;
};
