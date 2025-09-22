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
		const deletedValue = this.items[this.front]
		delete this.items[this.front]
		this.front++ 
		return deletedValue
	}

	peek(){
		return this.items[this.front]
	}
	
	reverse(){
		let tempArray = []
		while(this.front< this.rear){
			tempArray.push(this.dequeue())
		}

		for(let i= tempArray.length -1 ; i>=0;i-- ){
			this.enqueue(tempArray[i])
		}

	}


	removeOddNumbers(){
		let tempQueue = new Queue()
		while(this.front < this.rear){
			let value = this.dequeue()
			if(value%2== 0){
				tempQueue.enqueue(value)
			}
		}
		this.items = tempQueue.items 
		this.front = tempQueue.front 
		this.rear = tempQueue.rear
	}

	print(){
		console.log(this.items)
	}
}

const queue = new Queue()
queue.enqueue(23)
queue.enqueue(54)
queue.enqueue(67)
queue.print()
queue.removeOddNumbers()
queue.print()
