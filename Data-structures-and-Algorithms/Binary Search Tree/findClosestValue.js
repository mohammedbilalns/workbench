
class TreeNode{
    constructor(value){
        this.value = value 
        this.left = null 
        this.right = null 
    }
}

class Tree {
    constructor(){
        this.root = null 
    }

    insert(value){
        const newNode = new TreeNode(value)
        if(!this.root){
            this.root = newNode 
            return 
        }

        let curr = this.root 
        while(true ){
            if(value< curr.value){
                if(!curr.left){
                    curr.left = newNode
                    return 
                }
                curr = curr.left 
            }else if(value> curr.value ){
                if(!curr.right){
                    curr.right = newNode
                    return 
                }
                curr = curr.right 
            }else {
                return 
            }
        }
        return 
    }

    findClosest(val){
        let closest = this.root.value 
        let curr = this.root 
        while(curr){
            if(Math.abs(closest - val) > Math.abs(curr.value- val)){
                closest = curr.value 
            }
            curr = val < curr.value ? curr.left : curr.right 
        }
        return closest 
    }

    preOrder(node = this.root, result = []){
        if(node){
            this.preOrder(node.left, result)
            result.push(node.value)
            this.preOrder(node.right, result)
        }
        return result 
    }

}

let bst = new Tree()
bst.insert(10)
bst.insert(4)
bst.insert(6)
bst.insert(2)
bst.insert(3)
bst.insert(7)

console.log(bst.findClosest(5))
