function first(){
	let a = 1 
	return function(){
		console.log(++a)
	}
}
const second = first()
second()
second()
