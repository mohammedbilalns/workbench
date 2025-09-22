// find most k frequent elments in an array using heap
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
    if (parentIndex >= 0 && this.heap[index][1] < this.heap[parentIndex][1]) {
      this.swap(index, parentIndex);
      this.heapifyUp(parentIndex);
    }
  }

  heapifyDown(index) {
    let smallest = index;
    let left = 2 * index + 1;
    let right = 2 * index + 2;

    if (
      left < this.heap.length &&
      this.heap[left][1] < this.heap[smallest][1]
    ) {
      smallest = left;
    }

    if (
      right < this.heap.length &&
      this.heap[right][1] < this.heap[smallest][1]
    ) {
      smallest = right;
    }

    if (index !== smallest) {
      this.swap(index, smallest);
      this.heapifyDown(smallest);
    }
  }
}

function kMostFrequent(arr, k) {
  let freqMap = new Map();

  for (let num of arr) {
    freqMap.set(num, (freqMap.get(num) ?? 0) + 1);
  }
  let hp = new MinHeap();
  for (let [num, freq] of freqMap.entries()) {
    hp.insert([num, freq]);
    if (hp.heap.length > k) {
      hp.removeMin();
    }
  }

  return hp.heap.map((elem) => elem[0]);
}

console.log(kMostFrequent([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5], 2));
