var isSubtree = function (root, subRoot) {
  function isSame(p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p.val !== q.val) return false;

    return isSame(p.left, q.left) && isSame(p.right, q.right);
  }

  if (isSame(root, subRoot)) return true;
  if (!root) return false;

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};
