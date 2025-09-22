class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  getHeight(node) {
    return node ? node.height : 0;
  }

  getBalanceFactor(node) {
    return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
  }

  rightRotate(y) {
    let x = y.left;
    let T = x.right;
    x.right = y;
    y.left = T;

    y.height = 1 + Math.max(this.getHeight(y.left), this.getHeight(y.right));
    x.height = 1 + Math.max(this.getHeight(x.left), this.getHeight(x.right));

    return x;
  }

  leftRotate(x) {
    let y = x.right;
    let T = y.left;
    y.left = x;
    x.right = T;

    x.height = 1 + Math.max(this.getHeight(x.left), this.getHeight(x.right));
    y.height = 1 + Math.max(this.getHeight(y.left), this.getHeight(y.right));

    return y;
  }

  insert(node, value) {
    if (!node) return new TreeNode(value);

    if (value < node.value) {
      node.left = this.insert(node.left, value);
    } else if (value > node.value) {
      node.right = this.insert(node.right, value);
    } else {
      return node; // Duplicates are not allowed
    }

    node.height =
      1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    let balanceFactor = this.getBalanceFactor(node);

    // Left Heavy (LL or LR)
    if (balanceFactor > 1) {
      if (value < node.left.value) {
        return this.rightRotate(node); // LL Case
      } else {
        node.left = this.leftRotate(node.left); // LR Case
        return this.rightRotate(node);
      }
    }

    // Right Heavy (RR or RL)
    if (balanceFactor < -1) {
      if (value > node.right.value) {
        return this.leftRotate(node); // RR Case
      } else {
        node.right = this.rightRotate(node.right); // RL Case
        return this.leftRotate(node);
      }
    }

    return node;
  }

  add(value) {
    this.root = this.insert(this.root, value);
  }

  preOrder(node = this.root) {
    if (node) {
      console.log(node.value);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }
}

// Usage
const tree = new AVLTree();
tree.add(3);
tree.add(4);
tree.add(2);
tree.add(5);
tree.add(1);

tree.preOrder(); // Check the AVL tree structure
