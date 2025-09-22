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
        const newNode = new TreeNode(value); // Fixed class reference
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
                return; // Value already exists
            }
        }
    }

    // Find the Least Common Ancestor (LCA)
    leastCommonAncestor(node, n1, n2) {
        if (!node) return null;

        if (node.value > n1 && node.value > n2) {
            return this.leastCommonAncestor(node.left, n1, n2);
        } else if (node.value < n1 && node.value < n2) {
            return this.leastCommonAncestor(node.right, n1, n2);
        }
        return node;
    }

    // Find distance from root to target node
    findDistanceFromRoot(node, target, distance = 0) {
        if (!node) return -1;

        if (node.value === target) return distance;

        if (target < node.value) {
            return this.findDistanceFromRoot(node.left, target, distance + 1);
        } else {
            return this.findDistanceFromRoot(node.right, target, distance + 1);
        }
    }

    // Compute the distance between two nodes
    findDistance(n1, n2) {
        let lca = this.leastCommonAncestor(this.root, n1, n2); // Fixed method call
        if (!lca) return -1; // If either node is not found

        let d1 = this.findDistanceFromRoot(lca, n1);
        let d2 = this.findDistanceFromRoot(lca, n2);

        return d1 + d2;
    }
}
