class Node {
	constructor(value){
		this.value = value 
		this.next = null  
	}
}

class Stack {
	constructor(){
		this.top = null 
		this.size = 0 
	}

	push(value){
		const newNode = new Node(value)
		if(!this.top){
			this.top = newNode 
		}else {
			newNode.next = this.top 
			this.top = newNode 
		}
		this.size++ 
	}


	pop(){
		if(!this.top){
			return  
		}
		let removed = this.top 
		this.top = this.top.next 
		this.size--
		return removed.value 
	}

	peak(){
		if(!this.top){
			console.log("Stack is Empty")
			return
		}
		return this.top.value 
	}
	
	reverse(){
		let prev = null
		let curr = this.top 

		while( curr){
			let next = curr.next 
			curr.next = prev  
			prev = curr 
			curr = next 	
		}
		this.top = prev  

	}

	print(){
		if(!this.top){
			console.log("Stack is Empty")
			return 
		}
		let curr = this.top 
		let result = ""
		while(curr){
			result+= curr.value + " => "
			curr = curr.next 
		}
		console.log(result)
	}



}


const stack = new Stack()
stack.push(32)
stack.push(43)
stack.push(767)
stack.print()
stack.reverse()
stack.print()
