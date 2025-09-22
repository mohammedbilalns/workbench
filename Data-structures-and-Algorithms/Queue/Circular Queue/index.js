class CircularQueue {
	constructor(capacity){
		this.items = new Array(capacity).fill(null)
		this.capacity = capacity 
		this.front = 0 
		this.size = 0 
	}

	enqueue(value){
		
		if(this.size == this.capacity ) return null
		let rear = (this.front+this.size)% this.capacity
		this.items[rear] = value 
		this.size++ 
	}

	dequeue(){
		if(this.size == 0 ) return null 
		let removed = this.items[this.front]
		this.items[this.front] = null 
		this.front = (this.front+1)%this.capacity
		this.size-- 
		return removed
	}

	print(){
		let curr = this.front 
		let result  = ""

		for(let i=0 ;i< this.size ;i++){
			result += this.items[curr] + " "
			curr = (curr+1) % this.capacity
		}	

		console.log(result)
	}
}


const queue = new CircularQueue(4)
queue.enqueue(54)
queue.enqueue(32)
queue.enqueue(65)
queue.enqueue(87)
queue.dequeue()
queue.print()
