class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
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
          return;
        }
        curr = curr.left;
      } else if (value > curr.value) {
        if (!curr.right) {
          curr.right = newNode;
          return;
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

  height(node = this.root) {
    if (!node) return -1;
    let height = -1;
    let queue = [node];

    while (queue.length > 0) {
      let levelSize = queue.length;
      height++;

      for (let i = 0; i < levelSize; i++) {
        let curr = queue.shift();
        if (curr.left) queue.push(curr.left);
        if (curr.right) queue.push(curr.right);
      }
    }
    return height;
  }

  heightWvalue(value) {
    let node = this.search(value);
    return this.height(node);
  }

  leftHeight(node = this.root) {
    return this.height(node.left);
  }
  rightHeight(node = this.root) {
    return this.height(node.right);
  }
}

const bst = new Tree();
bst.insert(2);
bst.insert(6);
bst.insert(0);
bst.insert(4);
bst.insert(3);
bst.insert(3);
console.log(bst.height());
