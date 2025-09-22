class MinHeap{
    constructor(){
        this.heap = []
    }


    getLeftChildIndex(index){
        return 2*index +1 
    }
    getRightChildIndex(index){
        return 2*index+2
    }
    getParentIndex(index){
        return Math.floor((index-1)/2)
    }
    hasParent(index){
        return this.getParentIndex(index) >=0 
    }
    swap(a,b){
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
    }
    heapifyUp(index){
        while(this.hasParent(index) && this.heap[this.getParentIndex(index)] > this.heap[index] ){
            this.swap(index, this.getParentIndex(index))
            index = this.getParentIndex(index)
        }
    }

    heapifyDown(index){
        let smallest = index 
        let leftChildIndex = this.getLeftChildIndex(index)
        let rightChildIndex = this.getRightChildIndex(index)

        if(leftChildIndex< this.heap.length && this.heap[leftChildIndex]< this.heap[smallest]){
            smallest = leftChildIndex 
        }
        if(rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallest]){
            smallest = rightChildIndex 
        }

        if(smallest !== index){
            this.swap(index, smallest)
            this.heapifyDown(smallest)
        }
    }


    insert(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length-1)
    }

    removeSmallest(){
        if(this.heap.length == 0 ) return null 
        if(this.heap.length ==1 ) return this.heap.pop()

        let smallest = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
        return smallest 
    }

    print(){
        console.log(this.heap)
    }
}

const minheapex = new MinHeap()
minheapex.insert(2)
minheapex.insert(8)
minheapex.insert(1)
minheapex.insert(9)
minheapex.print()
minheapex.removeSmallest()
minheapex.print()

