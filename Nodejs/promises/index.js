function delayFn(delay){
	return new Promise((resolve)=> setTimeout(resolve, delay))	
}
console.log("Started")
delayFn(200).then(()=> console.log("After 2 seconds"))
console.log("end")



function divideFn(num1, num2){
	return new Promise((resolve, reject)=> {
		if(num2 == 0 ){
			reject("Cannot divide by zero")
		}else{
			resolve(num1/num2)
		}
	})
}

divideFn(32,32).then((result)=> console.log(result)).catch((err)=> console.log(err))


async function delayGreet(name){
	await delayFn(2000)
	console.log(name)
}

async function division(num1, num2 ){

}
