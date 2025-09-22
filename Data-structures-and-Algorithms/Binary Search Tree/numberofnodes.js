class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class Tree {
    constructor() {
        this.root = null
    }

    insert(value) {
        const newNode = new TreeNode(value)
        if (!this.root) {
            this.root = newNode
            return
        }

        let curr = this.root
        while (true) {
            if (value < curr.value) {
                if (!curr.left) {
                    curr.left = newNode
                    return
                }
                curr = curr.left
            } else if (value > curr.value) {
                if (!curr.right) {
                    curr.right = newNode
                    return
                }
                curr = curr.right
            } else {
                return
            }
        }
    }

    countNodes() {
        let count = 0
        let queue = [this.root]

        while (queue.length > 0) {
            let curr = queue.shift()
            count++
            if (curr.left) {
                queue.push(curr.left)
            }
            if (curr.right) {
                queue.push(curr.right)
            }

        }

        return count
    }
}

const tree = new Tree()
tree.insert(10)
tree.insert(4)
tree.insert(8)
tree.insert(2)
tree.insert(6)
console.log(tree.countNodes())