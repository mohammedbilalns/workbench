class Queue {
	constructor(){
		this.items = []
	}

	enQueue(element){
		this.items.push(element)
	}
	deQueue(){
		return this.items.shift()
	}
	isEmpty(){
		return this.items.length == 0 
	}

	peak(){
		if(!this.isEmpty()){
			return this.items[0]
		}else {
			return null 
		}
	}

	size(){
		return this.items.length 
	}

	print(){
		console.log(this.items.toString())
	}
}

const queue = new Queue()
queue.enQueue(23)
queue.enQueue(234)
queue.print()
queue.deQueue()
queue.print()
