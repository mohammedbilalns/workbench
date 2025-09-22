class Node {
	constructor(value) {
		this.value = value
		this.left = this.right = null
	}

}

class BinaryTree {
	constructor() {
		this.root = null
	}
	//---- inserting a node given the value   ---- 

	insert(value) {
		const newNode = new Node(value)
		if (!this.root) {
			this.root = newNode
			return
		}// check if root is exists 

		function insertRercursively(node) {
			if (value < node.value) {
				if (!node.left) node.left = newNode
				else insertRercursively(node.left)
			} else {
				if (!node.right) node.right = newNode
				else insertRercursively(node.right)
			}
		}// recursively insert new node 

		insertRercursively(this.root)
	}

	//---- seraching for a node given its value ----- 

	search(value) {
		let curr = this.root

		while (curr) {
			if (curr.value == value) return curr
			curr = value < curr.value ? curr.left : curr.right
		}
		return null
	}

	//---- Depth First Search ----- 

	preOrderTraversal(node = this.root, result = []) {
		if (node) {
			result.push(node.value)
			this.preOrderTraversal(node.left, result)
			this.preOrderTraversal(node.right, result)
		}
		return result
	} // curr, left, right  

	inOrderTraversal(node = this.root, result = []) {
		if (node) {
			this.inOrderTraversal(node.left, result)
			result.push(node.value)
			this.inOrderTraversal(node.right, result)
		}
		return result
	}//  left , curr , right 

	postOrderTraversal(node = this.root, result = []) {
		if (node) {
			this.postOrderTraversal(node.left, result)
			this.postOrderTraversal(node.right, result)
			result.push(node.value)
		}
		return result
	}// left right  curr 

	//---- Depth First Search ---- 
	levelOrderTraversal() {

		if (!this.root) return []
		let result = []
		const queue = [this.root]

		while (queue.length > 0) {
			let levelSize = queue.length
			let levelNodes = []

			for (let i = 0; i < levelSize; i++) {
				let node = queue.shift()
				levelNodes.push(node.value)

				if (node.left) queue.push(node.left)
				if (node.right) queue.push(node.right)
			}
			result.push(levelNodes)
		}

		return results
	}

	//---- Minium and  maximum values from the tree 
	getMin(node = this.root) {
		while (node.left) {
			node = node.left
		}

		return node
	}// find the minimum element 

	getSecondMin(node = this.root) {
		let minimum = Infinity
		let secondMinimum = Infinity

		function inOrder(node) {
			if (!node) return

			inOrder(node.left)
			if (node.value < minimum) {
				secondMinimum = minimum
				minimum = node.value
			} else if (node.value < secondMinimum && node.value > minimum) {
				secondMinimum = node.value
			}
			inOrder(node.right)

		}

		inOrder(node)
		return secondMinimum
	}

	getMax(node = this.root) {
		while (node.right) {
			node = node.right
		}
		return node
	}// find the maximum element 

	//---- Get the hieght of the node ---- 
	getHeightFN(node = this.root) {
		if (!node) return -1
		if (!node.left && !node.right) return 0
		return Math.max(this.getHeightFN(node.left), this.getHeightFN(node.right)) + 1
	}// get the height given the node 

	getHeightFV(value) {
		const node = this.search(value)
		return this.getHeightFromNode(node)
	}// get the height given the value 

	//------ Get the depth  ---- 

	getDepth(node = this.root, curr = this.root, depth = 0) {
		if (!curr) return -1
		if (curr == node) return depth

		if (node.value < curr.value) {
			return this.getDepth(node, curr.left, depth + 1)
		} else {
			return this.getDepth(node, curr.right, depth + 1)
		}
	}
	maxDepth(node = this.root) {
		if (!node) return 0
		return 1 + Math.max(this.maxDepth(node.left), this.maxDepth(node.right))
	}

	//----- Remove node from the tree ---- 

	remove(value) {
		this.root = this.removeNode(this.root, value)
	}

	removeNode(node, value) {  
		if (!node) return node 

		if (value < node.value) {
			node.left = this.removeNode(node.left, value)
		} else if (value > node.value) {
			node.right = this.removeNode(node.right, value)
		} else {

			if (!node.left && !node.right) {
				return null
			}

			if (!node.left) return node.right
			if (!node.right) return node.left

			let minRight = this.getMin(node.right)
			node.value = minRight.value
			node.right = this.removeNode(node.right, minRight.value)
		}

		return node

	}

	isBST(node = this.root, min = -Infinity, max = Infinity) {
		if (!node) return true

		if (node.value <= min || node.value >= max) {
			return false
		}

		return (this.isBST(node.left, min, node.value) && this.isBST(node.right, node.value, max))
	}

	areIdentical(node1, node2) {
		if (!node1 && !node2) return true
		if (!node1 || !node2) return false
		if (node1.value !== node2.value) return false

		return (this.areIdentical(node1.left, node2.left) && this.areIdentical(node1.right, node2.right))
	}

	isSubTree(largeTreeRoot, smallTreeRoot) {
		if (!smallTreeRoot) return true
		if (!largeTreeRoot) return false

		if (this.areIdentical(largeTreeRoot, smallTreeRoot)) return true

		return (
			this.isSubtree(largeTreeRoot.left, smallTreeRoot) ||
			this.isSubtree(largeTreeRoot.right, smallTreeRoot)
		);
	}
	findSecondLargest(root) {
		if (!root || (!root.left && !root.right)) return null; // No second largest if there's only 1 node

		let parent = null;
		let curr = root;

		// Find the rightmost (largest) node
		while (curr.right) {
			parent = curr; // Track the parent of the largest node
			curr = curr.right;
		}

		// Case 1: Largest node has a left subtree
		if (curr.left) {
			let secondLargest = curr.left;
			while (secondLargest.right) {
				secondLargest = secondLargest.right;
			}
			return secondLargest.value;
		}

		// Case 2: Largest node has no left subtree, return parent
		return parent.value;
	}
}

const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(2);
tree.insert(7);
tree.insert(12);
tree.insert(20);

let nd = tree.search(5)
tree.remove(5)
console.log(tree.getSecondMin())

