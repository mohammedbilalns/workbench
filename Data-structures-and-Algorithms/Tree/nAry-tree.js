// implement an n-ary tree 
class TreeNode{
    constructor(value){
        this.value = value 
        this.children = []
    }
    
    
    addChild(node){
        this.children.push(node)
    }
}


class NTree{
    constructor(value){
        this.root = new TreeNode(value)
    }
    
    preOrder(node = this.root, result = []){
        if(node){
            result.push(node.value)
            for(let child of node.children){
                this.preOrder(child, result)
            }
        }
        return result 
    }
    
    postOrder(node = this.root , result = []){
        if(node){
            for(let child of node.children){
                this.preOrder(child, result )
            }
            result.push(node.value)

        }
        return result 
    }
    
    levelOrder(node = this.root){
        let queue = [node]
        let result = []
        
        while(queue.length > 0 ){
            let curr = queue.shift()
            result.push(curr.value)
            for(let child of curr.children){
                queue.push(child)
            }
        }
        return result 
        
    }
}

const tree = new NTree(10)
const secondNode = new TreeNode(4)
tree.root.addChild(secondNode)
const thirdNode = new TreeNode(3)
tree.root.addChild(thirdNode)
const fourthNode = new TreeNode(5)
tree.root.addChild(fourthNode)
const fifthNode = new TreeNode(8)
fourthNode.addChild(fifthNode)

console.log(tree.levelOrder())

