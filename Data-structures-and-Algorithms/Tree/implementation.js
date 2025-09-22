class TreeNode {
	constructor(value){
		this.value = value 
		this.children = [] // stores the array of child nodes 
	}

	addChild(child){
		if(child instanceof TreeNode){
			this.children.push(child) // if the child is a TreeNode add it directly 
		}else {
			this.children.push(new TreeNode(child)) //otherwise , wrap in treenode and push it 
		}
	}

	removeChild(value){
		this.children = this.children.filter(child => child.value !== value)
	}


	find(value){
		if(this.value == value){
			return this 
		} // base case - the node itself has the value 

		for(let child of this.children){
			let result = child.find(value)
			if(result) return result 
		}
		return null // not found 
	}
}

class Tree {
	constructor(rootValue){
		this.root = new TreeNode(rootValue) // create a tree root node 
	}

	traverse(callback= console.log){
		function recursiveTraverse(node){
			callback(node) // process the current node 
			for(let child of node.children){
				recursiveTraverse(child) // recursively visis  children 
			}
		}
		recursiveTraverse(this.root)
	}		// traversal using depth first search 
}



const tree = new Tree("Root")
const node1 = new TreeNode("A")
const node2 = new TreeNode("B")

tree.root.addChild(node1)
tree.root.addChild(node2)
node1.addChild("A1")
node2.addChild("B1")
node1.addChild("A2")

console.log(tree.root.find("B"))
// tree.traverse(node => console.log(node.value))
