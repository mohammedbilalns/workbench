// find the kth largest element of an array  without sorting
class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  removeMin() {
    if (this.heap.length == 0) return null;
    if (this.heap.length == 1) return this.heap.pop();
    let min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return min;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  heapifyUp(index) {
    let parentIndex = Math.floor((index - 1) / 2);
    if (parentIndex >= 0 && this.heap[index] < this.heap[parentIndex]) {
      this.swap(index, parentIndex);
      this.heapifyUp(parentIndex);
    }
  }

  heapifyDown(index) {
    let smallest = index;
    let left = 2 * index + 1;
    let right = 2 * index + 2;

    if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }

    if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }

    if (index !== smallest) {
      this.swap(index, smallest);
      this.heapifyDown(smallest);
    }
  }
}

function kthLargest(arr, k) {
  const minHeap = new MinHeap();

  for (let num of arr) {
    if (minHeap.heap.length < k) {
      minHeap.insert(num);
    } else if (num > minHeap.heap[0]) {
      minHeap.removeMin();
      minHeap.insert(num);
    }
  }
  return minHeap.heap[0];
}

console.log(kthLargest([1, 2, 3, 4, 5, 6, 7], 1));
// O(nlogk)
