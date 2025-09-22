class HashTable {
	constructor(size){
		this.size = size 
		this.table = []
	}

	hash(key){
		let total = 0 
		for(let i=0 ;i<key.length ;i++){
			total += key.charCodeAt(i)
		}	
		return total % this.size
	}

	set(key,value){
		
		let index = this.hash(key)
		while(this.table[index] !== undefined){
			if(this.table[index][0]== key){
				this.table[index][1] = value
				return
			}
			index = (index+1)% this.size 
		}
		this.table[index] = [key,value] 
	}
	
	get(key){
		let index = this.hash(key)
		while(this.table[index] !== undefined){
			if(this.table[index][0] == key){
				return this.table[index][1]
			}
			index = (index+1) % this.size 
		}
		return undefined
	}

	remove(key){
		let index = this.hash(key)
		while(this.table[index]!== undefined){
			if(this.table[index][0] == key){
				let removed = this.table[index][0]
				this.table[index] = undefined
				return removed 
			}
			index = (index+1) % this.size 
		}

	}


	print(){
		for(let i=0 ;i<this.table.length ;i++){
			if(this.table[i]){
				console.log([i, this.table[i]])
			}	
		}
	}
}

let countCharacters = function(str){
	let map  = new HashTable(26)

	for(let i=0 ;i<str.length ;i++){
		map.set(str[i],(map.get(str[i]) ?? 0)+1)
	}

	map.print()
}

countCharacters("mississippi")
