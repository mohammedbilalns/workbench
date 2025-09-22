class Queue {
	constructor(){
		this.items = {}
		this.front = 0 
		this.rear = 0 
	}

	enqueue(value){
		this.items[this.rear] = value 
		this.rear++ 
		
	}


	dequeue(){
		let deleted = this.items[this.front]
		delete this.items[this.front]
		this.front++ 
		return deleted 
			
	}

	peek(){
		return this.items[this.rear]

	}
	size(){
		return this.rear - this.front
	}

	print(){
		console.log(this.items)
	}
}

class Stack {
	constructor(){
		this.items = new Queue()
	}

	push(value){
		this.items.enqueue(value)
	}
	pop(){
		
		let size = this.items.size()

		for(let i=0 ;i< size-1 ;i++){
			this.items.enqueue(this.items.dequeue())
		}

		return this.items.dequeue()
	}
	
	peek(){
		let size = this.items.size()

		for(let i=0 ;i< size-1 ;i++){
			this.items.enqueue(this.items.dequeue())
		}

		let topItem = this.items.dequeue()
		this.items.enqueue(topItem)
		
	}

	print(){
		this.items.print()
	}
}


const stack  = new Stack()
stack.print()
stack.push(43)
stack.push(98)
stack.push(3)
stack.print()
console.log(stack.pop())
stack.print()

 
