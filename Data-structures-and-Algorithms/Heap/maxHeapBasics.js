
class maxHeap {
    constructor() {
        this.heap = []
    }

    getLeftChildIndex(index) {
        return index * 2 + 1
    }
    getRightChildIndex(index) {
        return index * 2 + 2
    }
    getParentIndex(index) {
        return Math.floor((index - 1) / 2)
    }
    hasParent(index) {
        return this.getParentIndex(index) >= 0
    }
    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
    }
    heapifyUp(index) {
        while (this.hasParent(index) && this.heap[this.getParentIndex(index)] < this.heap[index]) {
            this.swap(index, this.getParentIndex(index))
            index = this.getParentIndex(index)
        }
    }

    heapifyDown(index) {
        let largest = index
        let leftChildIndex = this.getLeftChildIndex(index)
        let rightChildIndex = this.getRightChildIndex(index)

        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largest]) {
            largest = leftChildIndex
        }
        if(rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largest]){
            largest = rightChildIndex 
        }

        if(largest !== index){
            this.swap(index, largest )
            this.heapifyDown(largest)
        }
    }
    insert(value) {
        this.heap.push(value)
        this.heapifyUp(this.heap.length - 1)
    }

    removeMax() {
        let max = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
        return max 
    }

    print() {
        console.log(this.heap)
    }

    increaseKey(index, newValue){

    }

    decreaseKey(index, value){
        if(index<0 || index> this.heap.length || value > this.heap[index]){
            return 
        }
        this.heap[index] = value 
        this.heapifyDown(index)
    }

    increaseKey(index, value){
        if(index<0 || index> this.heap.length || value < this.heap[index]){
            return 
        }
        this.heap[index] = value 
        this.heapifyUp(index)
    }
}

let sampleHeap = new maxHeap()
sampleHeap.insert(4)
sampleHeap.insert(8)
sampleHeap.insert(9)
sampleHeap.insert(2)
sampleHeap.print()
sampleHeap.removeMax()

sampleHeap.print()