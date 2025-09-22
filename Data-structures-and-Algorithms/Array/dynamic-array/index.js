class dynamicArray {
	constructor(initialCapacity = 2){
		this.capacity = initialCapacity
		this.size = 0 
		this.array = new Array(this.capacity)
	}

	add(element){

		if(this.size === this.capacity){
			this.resize()
		}

		this.array[this.size] = element 
		this.size++ 
	}
	resize(){
		const newCapacity = this.capacity * 2 
		const newArray = new Array(newCapacity)

		for(let i=0; i < this.size;i++){
			newArray[i] = this.array[i]
		}

		this.array = newArray 
		this.capacity = newCapacity 
	}

	get(index){
		if(index >= 0 && index < this.size){
			return this.array[index]
		}
		throw new Error("Index out of bounds ")
	}

	remove(){
		if(this.size > 0 ){
			this.size--
			this.array[this.size] = undefined
		}else {
			throw new Error("Array is Empty ")
		}
	}

	getSize(){
		return this.size 
	}

	isEmpty(){
		return this.size === 0 
	}
}

const array1 = new dynamicArray(4)
array1.add(4)
array1.add(54)
array1.remove()
console.log(array1)
