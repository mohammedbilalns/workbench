class Stack {
	constructor(){
		this.items = []
		this.size = 0 
	}


	push(value){
		this.items[this.size ] = value 
		this.size++ 
	
	}

	pop(){
		const removed = this.items[this.size-1]
		delete this.items[this.size-1]
		this.size-- 
		return removed 

	}

	top(){
		return this.items[this.size-1]
	}

	print(){
		console.log(this.items)
	}
}

class Queue {
	constructor(){
		this.stack1 = new Stack()
		this.stack2 = new Stack()
	}

	enqueue(value){
		this.stack1.push(value)
	}

	dequeue(){
		while(this.stack1.size > 1 ){
			this.stack2.push(this.stack1.pop())
		}
		let deleted = this.stack2.pop()

		while(this.stack2.size > 0 ){
			this.stack1.push(this.stack2.pop())
		}

		return deleted
	}
	
	peek(){
		while(this.stack1.size >0){
			this.stack2.push(this.stack1.pop())
		}
		let front = this.stack2.pop()
		this.stack1.push(front)
		while(this.stack2.size >0){
			this.stack1.push(this.stack2.pop())
		}
		return front 
	}


	print(){
		console.log(this.stack1.items)
	}
}

let queue = new Queue()
queue.enqueue(76)
queue.enqueue(87)
queue.dequeue()
queue.enqueue(809)
queue.print()
console.log(queue.peek())
queue.print()
