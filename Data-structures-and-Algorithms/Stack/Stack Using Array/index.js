class Stack {
	 constructor(){
		 this.stack = new Array()
		 this.size = 0
	 }

	 push(value){

		 this.stack[this.size] = value 
		 this.size++ 
	 }

	 pop(){
		 if(this.size == 0 ){
			 return 
		 }
		 let removed = this.stack[this.size-1]	
		 this.size--
		 return removed 
	 }

	 peek(){
		 return this.stack[this.size-1]
	 }

	reverse(){
		let i = 0 
		let j = this.size-1 

		while(i< j){
			[this.stack[i], this.stack[j]] = [this.stack[j], this.stack[i] ]
			i++ 
			j-- 
		}

	}

	print(){
		if(this.size == 0 ){
			console.log("Stack is Empty")
		}else {

			let result = ""
			for(let i=0 ; i<this.size;i++){
				result+= this.stack[i]+" "
			}

			console.log(result)
		}
	}
 }


const stack = new Stack()
stack.push(12)
stack.push(32)
stack.print()
stack.reverse()
stack.print()



