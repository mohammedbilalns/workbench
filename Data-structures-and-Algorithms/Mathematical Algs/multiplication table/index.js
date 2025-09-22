// Given an integer find the multiplication time of it 

// Method 1 - O(1)TS 
let printTable = (n)=>{
	
	for(let i=1;i<=10;i++){
		console.log(`${i} x ${n} = ${i*n}`)
	}
}

// Method 2 - 

let printTableRecursive = (n,i=1) =>{
	if(i==11){
		return 
	}

	console.log(`${n} x ${i} = ${n*i}`)
	i++
	printTableRecursive(n,i)
}

console.log(printTableRecursive(11) )
