var findBottomLeftValue = function (root) {
  if (!root) return null;
  let queue = [root];

  let leftMost = null;
  while (queue.length > 0) {
    let levelSize = queue.length;
    leftMost = queue[0].val;
    for (let i = 0; i < levelSize; i++) {
      let curr = queue.shift();
      if (curr.left) {
        queue.push(curr.left);
      }

      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }
  return leftMost;
};
