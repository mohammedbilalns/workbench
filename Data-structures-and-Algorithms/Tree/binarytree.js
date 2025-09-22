// implement a binary tree

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function inOrder(node, result = []) {
  if (node) {
    inOrder(node.left, result);
    result.push(node.value);
    inOrder(node.right, result);
  }
  return result;
}
function preOrder(node, result = []) {
  if (node) {
    result.push(node.value);
    preOrder(node.left, result);
    preOrder(node.right, result);
  }
  return result;
}

function postOrder(node, result = []) {
  if (node) {
    preOrder(node.left, result);
    preOrder(node.right, result);
    result.push(node.value);
  }
  return result;
}

function levelOrder(node) {
  const queue = [node];
  const result = [];

  while (queue.length > 0) {
    let levelSize = queue.length;
    let levelItems = [];

    for (let i = 0; i < levelSize; i++) {
      let curr = queue.shift();
      levelItems.push(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
    result.push(levelItems);
  }
  return result;
}

function getHeight(node) {
  if (!node) return 1;
  return Math.min(getHeight(node.left), getHeight(node.right)) + 1;
}

let first = new TreeNode(3);
let second = new TreeNode(4);
let third = new TreeNode(6);
let fourth = new TreeNode(0);
let fifth = new TreeNode(1);

first.left = second;
first.right = third;
third.right = fourth;
fourth.left = fifth;

console.log(getHeight(first));
