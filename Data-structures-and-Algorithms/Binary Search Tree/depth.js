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

    getDepth(){
        
        let depth = -1 
        let queue = [this.root]

        while(queue.length > 0 ){
            let levelSize = queue.length
            depth +=1  
            for(let i=0 ; i< levelSize; i++ ){
                let curr = queue.shift()
                if(curr.left) queue.push(curr.left)
                if(curr.right) queue.push(curr.right)
            }
        }
        return depth 

    }

    depthOfNode(value ){
        let curr = this.root 
        let depth = 0
        while(curr){
            if(curr.value == value){
                return depth
            }
            depth++
            curr = value < curr.value ? curr.left : curr.right 
        }
        return -1 
    }

}


let tree = new Tree()
tree.insert(6)
tree.insert(8)
tree.insert(1)
tree.insert(2)
tree.insert(3)
tree.insert(0)

console.log(tree.depthOfNode(0))

