class maxHeap{
    constructor(){
        this.heap = []
    }

    getLeftChildIndex(parentIndex){
        return 2* parentIndex + 1 
    }
    getLeftChild(parentIndex){
        return this.heap[this.getLeftChildIndex(parentIndex)]
    }
    getRightChildIndex(parentIndex){
        return 2* parentIndex+2 
    }
    getRightChild(parentIndex){
        return this.heap[this.getRightChildIndex(parentIndex)]
    }
    getParentIndex(childIndex){
        return Math.floor((childIndex-1)/2) 
    }
    getParent(childIndex){
        return this.heap[this.getParentIndex(childIndex)]
    }
    hasParent(childIndex){
        return this.getParentIndex(childIndex) >= 0 
    }

    swap(index1, index2){
        [this.heap[index1], this.heap[index2]] = [ this.heap[index2], this.heap[index1]]
    }

    heapifyDown(index){
        let largest = index 
        
        if(this.getLeftChildIndex(index) < this.heap.length && this.getLeftChild(index) > this.heap[largest]){
            largest = this.getLeftChildIndex(index)
        }
        if(this.getRightChildIndex(index) < this.heap.length && this.getRightChild(index) > this.heap[largest]){
            largest  = this.getRightChildIndex(index)
        }
        if(largest !== index){
            this.swap(largest, index)
            this.heapifyDown(largest)
        }

    }

    heapifyUp(index){
        while(this.hasParent(index) && this.getParent(index)<this.heap[index]){
            this.swap(index, this.getParentIndex(index))
            index = this.getParentIndex(index)
        }
    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length-1 )
    }

    removeLargest(){
        if(this.heap.length == 0 ) return 
        if(this.heap.length == 1) return this.heap.pop()

        let largest = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
        return largest 
    }

    decreaseKey(index , value){
        if(index< 0 || index >= this.heap.length || value > this.heap[index]){
            console.log("Invalid Operation ")
            return 
        }
        this.heap[index] = value 
        this.heapifyDown(index)
    }

    increaseKey(index, value ){
        if(index< 0 || index <= this.heap.length || value > this.heap[index]){
            console.log("Invalid Operation ")
            return 
        }
        this.heap[index] = value 
        this.heapifyUp(index)
    }

    print(){
        console.log(this.heap)
    }
    
}




console.log(topKFrequent([1,5,7,8,3,5,3,2,6,2,4,2,4,6,2,5,3,2,4]))
