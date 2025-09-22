
class Stack{
	constructor(){
		this.items = []
		this.top = 0 
	}

	push(value){
		this.items[this.top] = value  
		this.top++ 
	}

	pop(){
		let deleted = this.items[this.top-1]
		delete this.items[this.top-1]
		this.top-- 
		return deleted 
	}

	peek(){
		return this.items[this.top-1]
	}

	findEven(){
		let evens = []
		let tempArr = []

		while(this.top >0){
			let val = this.pop()
			if(val%2 == 0){
				evens.push(val)
			}
			tempArr.unshift(val)
		}
		tempArr.forEach(val => this.push(val))
		return  evens
	}



	print(){
		for(let i=0 ;i<this.top;i++){
			console.log(this.items[i])
		}
	}
}

let stack = new Stack()
stack.push(65)
stack.push(76)
stack.push(876)

stack.print()
console.log(stack.findEven())
stack.print()


