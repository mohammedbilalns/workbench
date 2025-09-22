var sumOfLeftLeaves = function (root) {
  let queue = [root];
  let result = 0;

  while (queue.length > 0) {
    let curr = queue.shift();
    if (curr.left && !curr.left.left && !curr.left.right) {
      result += curr.left.val;
    }
    if (curr.left) {
      queue.push(curr.left);
    }
    if (curr.right) {
      queue.push(curr.right);
    }
  }

  return result;
};
