// implement bst in js with preorder dfs traversals insert and delete and get minimum

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let curr = this.root;
    while (true) {
      if (value < curr.value) {
        if (!curr.left) {
          curr.left = newNode;
        }
        curr = curr.left;
      } else if (value > curr.value) {
        if (!curr.right) {
          curr.right = newNode;
        }
        curr = curr.right;
      } else {
        return;
      }
    }
  }

  search(value) {
    let curr = this.root;
    while (curr) {
      if (curr.value == value) return curr;
      curr = value < curr.value ? curr.left : curr.right;
    }
    return null;
  }

  getMin(node) {
    let curr = node;
    while (curr.left) {
      curr = curr.left;
    }
    return curr;
  }
  remove(value) {
    this.root = this.removeNode(this.root, value);
  }

  removeNode(node, value) {
    if (!node) return null;
    if (value < node.value) {
      node.left = this.removeNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.removeNode(node.right, value);
    } else {
      if (!node.left && !node.right) return null;
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      let successor = this.getMin(node.right);
      node.value = successor.value;
      node.right = this.removeNode(node.right, successor.value);
    }
    return node;
  }

  preOrder(node = this.root, result = []) {
    if (node) {
      result.push(node.value);
      this.preOrder(node.left, result);
      this.preOrder(node.right, result);
    }
    return result;
  }

  bfs() {
    let queue = [this.root];
    let result = [];

    while (queue.length > 0) {
      let levelItems = [];
      let levelSize = queue.length;

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
}

const tree = new BST();
tree.insert(5);
tree.insert(8);
tree.insert(3);
tree.insert(7);
tree.remove(8);
console.log(tree.bfs());
