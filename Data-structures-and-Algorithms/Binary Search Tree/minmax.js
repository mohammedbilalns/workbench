class TreeNode{
    constructor(value){
        this.value = value 

    }
}

class Tree{
    constructor(){
        this.root = null 
    }

    insert(value){
        const newNode = new TreeNode(value)
        if(!this.root){
            this.root =  newNode 
            return 
        }

        function insertRecursively(node){
            if(value< node.value){
                if(!node.left) node.left = newNode
                else insertRecursively(node.left)
            }else {
                if(!node.right) node.right = newNode 
                else insertRecursively(node.right)
            }
        }

        insertRecursively(this.root)
    }

    max(node = this.root){
        let curr = node  
        while(curr.right){
            curr = curr.right
        }
        return curr.value 
    }
    
    secondMax(node = this.root){
        if(!node || (!node.left && !node.right)) return null 
        let prev = null 
        let curr = node 

        while(curr.right){
            prev = curr 
            curr = curr.right 
        }

        if(curr.left) return this.max(curr.left)
        return prev? prev.value :null 


    }

    thirdMax(node = this.root){
        let grandPrev = null 
        let prev = null 
        let curr = node 

        while(curr.right){
            grandPrev = prev 
            prev = curr 
            curr = curr.right 
        }

        if(curr.left) return this.max(curr.left)
        if(prev.left) return this.max(prev.left)

        return grandPrev? grandPrev.value : null 
    }

    min(node = this.root){
        let curr = node 
        while(curr.left){
            curr = curr.left 
        }
        return curr.value 
    }

    secondMin(node = this.root){
        if(!node || (!node.left && !node.right)) return null 
        let prev = null 
        let curr = node 

        while(curr.left){
            prev = curr 
            curr = curr.left 
        }
        if(curr.right) return this.min(curr.right)
        return prev? prev.value : null 
    }

    thirdMin(node = this.root){
        if(!node |(!node.left && !node.right)) return null 
        let grandPrev = null 
        let prev = null 
        let curr = node 
        
        while(curr.left){
            grandPrev = prev 
            prev = curr 
            curr = curr.left 
        }
        if(curr.right) return this.min(curr.right)
        if(prev.right) return this.min(prev.right)

        return grandPrev? grandPrev.value : null 
    }
}



const bst = new Tree()
bst.insert(3)
bst.insert(8)
bst.insert(7)
bst.insert(9)
bst.insert(2)
bst.insert(8)

console.log(bst.thirdMax())


