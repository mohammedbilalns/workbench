
class minHeap {
    constructor() {
        this.heap = []
    }

    getLeftChildIndex(parentIndex) {
        return 2 * parentIndex + 1
    }

    getLeftChild(parentIndex) {
        return this.heap[this.getLeftChildIndex(parentIndex)]
    }

    getRightChildIndex(parentIndex) {
        return 2 * parentIndex + 2
    }
    gerRightChild(parentIndex) {
        return this.heap[this.getRightChildIndex(parentIndex)]
    }

    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2)
    }

    hasParent(index) {
        return this.getParentIndex(index) >= 0
    }
    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
    }

    // insert a new node to the minimum heap using bubbling up 

    heapifyUp(index) {
        while (this.hasParent(index) && this.heap[index] < this.heap[this.getParentIndex(index)]) {
            this.swap(index, this.getParentIndex(index))
            index = this.getParentIndex(index)
        }
    }

    heapifyDown(index) {

        let smallest = index
        let leftChildIndex = this.getLeftChildIndex(index)
        let rightChildIndex = this.getRightChildIndex(index)

        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallest]) {
            smallest = leftChildIndex
        }
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallest]) {
            smallest = rightChildIndex
        }

        if (smallest != index) {
            this.swap(smallest, index)
            this.heapifyDown(smallest)
        }

    }

    insert(value) {
        this.heap.push(value)
        this.heapifyUp(this.heap.length - 1)

    }

    removeSmallest() {
        if (this.heap.length == 0) return null
        if (this.heap.length == 1) return this.heap.pop()

        const smallest = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
        return smallest
    }

    
    decreaseKey(index, newValue) {
        if (index < 0 || index >= this.heap.length || newValue > this.heap[index]) {
            console.log("Invalid operation ")
            return
        }

        this.heap[index] = newValue
        this.heapifyUp(index)
    }

    increaseKey(index, newValue){
        if(index< 0 || index >= this.heap.length || newValue > this.heap[index]){
            console.log("Invalid operation ")
            return
        }
        this.heap[index] = newValue 
        this.heapifyDown(index)
    }


    print() {
        console.log(this.heap)
    }
}

function buildHeap(arr){
    let heap = new minHeap()
    heap.heap = arr 

    let lastNonLeafIndex = Math.floor(heap.heap.length/2) -1
    for(let i= lastNonLeafIndex ; i>= 0 ; i--){
        heap.heapifyDown(i)
    }
    return heap 
}

function heapSort(arr){
    let newHeap = buildHeap(arr)

    let sortedArr = []

    while(newHeap.heap.length > 0 ){
        sortedArr.push(newHeap.removeSmallest())
    }
    return sortedArr
}


console.log(heapSort([9,7,4,56,2,3,6,3,6,8,3]))
