class Node {
    constructor(data) {
        this.data = data;
        this.color = "RED"; // New nodes are always RED
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

class RedBlackTree {
    constructor() {
        this.NIL = new Node(null);
        this.NIL.color = "BLACK";
        this.root = this.NIL;
    }

    rotateLeft(x) {
        let y = x.right;
        x.right = y.left;
        if (y.left !== this.NIL) {
            y.left.parent = x;
        }
        y.parent = x.parent;
        if (x.parent === null) {
            this.root = y;
        } else if (x === x.parent.left) {
            x.parent.left = y;
        } else {
            x.parent.right = y;
        }
        y.left = x;
        x.parent = y;
    }

    rotateRight(y) {
        let x = y.left;
        y.left = x.right;
        if (x.right !== this.NIL) {
            x.right.parent = y;
        }
        x.parent = y.parent;
        if (y.parent === null) {
            this.root = x;
        } else if (y === y.parent.right) {
            y.parent.right = x;
        } else {
            y.parent.left = x;
        }
        x.right = y;
        y.parent = x;
    }

    insert(value) {
        let newNode = new Node(value);
        newNode.left = this.NIL;
        newNode.right = this.NIL;

        let y = null;
        let x = this.root;

        while (x !== this.NIL) {
            y = x;
            if (newNode.data < x.data) {
                x = x.left;
            } else {
                x = x.right;
            }
        }

        newNode.parent = y;
        if (y === null) {
            this.root = newNode;
        } else if (newNode.data < y.data) {
            y.left = newNode;
        } else {
            y.right = newNode;
        }

        newNode.color = "RED";
        this.fixInsert(newNode);
    }

    fixInsert(z) {
        while (z.parent && z.parent.color === "RED") {
            if (z.parent === z.parent.parent.left) {
                let y = z.parent.parent.right;
                if (y.color === "RED") {
                    z.parent.color = "BLACK";
                    y.color = "BLACK";
                    z.parent.parent.color = "RED";
                    z = z.parent.parent;
                } else {
                    if (z === z.parent.right) {
                        z = z.parent;
                        this.rotateLeft(z);
                    }
                    z.parent.color = "BLACK";
                    z.parent.parent.color = "RED";
                    this.rotateRight(z.parent.parent);
                }
            } else {
                let y = z.parent.parent.left;
                if (y.color === "RED") {
                    z.parent.color = "BLACK";
                    y.color = "BLACK";
                    z.parent.parent.color = "RED";
                    z = z.parent.parent;
                } else {
                    if (z === z.parent.left) {
                        z = z.parent;
                        this.rotateRight(z);
                    }
                    z.parent.color = "BLACK";
                    z.parent.parent.color = "RED";
                    this.rotateLeft(z.parent.parent);
                }
            }
        }
        this.root.color = "BLACK";
    }

    inorderTraversal(node = this.root) {
        if (node !== this.NIL) {
            this.inorderTraversal(node.left);
            console.log(node.data, node.color);
            this.inorderTraversal(node.right);
        }
    }
}

// Example usage
const rbt = new RedBlackTree();
rbt.insert(10);
rbt.insert(20);
rbt.insert(30);
rbt.insert(15);
rbt.insert(25);
rbt.insert(5);

console.log("Inorder traversal of Red-Black Tree:");
rbt.inorderTraversal();
