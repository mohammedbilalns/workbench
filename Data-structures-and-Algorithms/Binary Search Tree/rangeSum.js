class TreeNode {
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
            if(value < curr.value){
                if(!curr.left){
                    curr.left = newNode 
                    return 
                }
                curr = curr.left 
            }else if (value > curr.value ){
                if(!curr.right){
                    curr.right = newNode
                    return  
                }
                curr = curr.right 
            }else {
                return 
            }
        }
    }

    getNodeCount(){
        let count = 0 
        let queue = [this.root ]

        while(queue.length > 0 ){
            let curr = queue.shift()
            count++ 
            if(curr.left) queue.push(curr.left)
            if(curr.right) queue.push(curr.right)
        }
        return count 
    }

    getRangeSum(min, max){
        let sum = 0 
        let queue = [this.root ]
        while(queue.length > 0 ){
            let curr = queue.shift()

            if(curr.value<= max && curr.value >= min){
                sum+= curr.value 
            }

            if(curr.left && curr.value > min){
                queue.push(curr.left)
            }
            if(curr.value < max && curr.right){
                queue.push(curr.right)
            }
        }
        return sum 
    }

}


const tree = new Tree()
tree.insert(7)
tree.insert(19)
tree.insert(9)
tree.insert(5)
tree.insert(7)
console.log(tree.getRangeSum(1,9))
