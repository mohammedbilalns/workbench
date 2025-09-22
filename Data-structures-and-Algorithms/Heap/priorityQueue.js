// impelment priority queue
class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  queue(value, priority) {
    this.heap.push({ value, priority });
    this.heapifyUp(this.heap.length - 1);
  }

  dequeue() {
    let { value, priority } = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return value;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
  heapifyUp(index) {
    let parentIndex = Math.floor((index - 1) / 2);
    if (
      parentIndex >= 0 &&
      this.heap[index].priority > this.heap[parentIndex].priority
    ) {
      this.swap(index, parentIndex);
      this.heapifyUp(parentIndex);
    }
  }

  heapifyDown(index) {
    let largest = index;
    let left = 2 * index + 1;
    let right = 2 * index + 2;

    if (
      left < this.heap.length &&
      this.heap[left].priority > this.heap[largest].priority
    ) {
      largest = left;
    }
    if (
      right < this.heap.length &&
      this.heap[right].priority > this.heap[largest].priority
    ) {
      largest = right;
    }

    if (largest !== index) {
      this.swap(largest, index);
      this.heapifyDown(largest);
    }
  }

  print() {
    console.log(this.heap);
  }
}
let q = new PriorityQueue();
q.queue(43, 5);
q.queue(54, 3);
q.dequeue();
q.print();
