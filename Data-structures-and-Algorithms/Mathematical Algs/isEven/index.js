// write a program to check an integer is and even 

// Method 1 - By finding modulo n  O(1)TS  

const isEven = (n)=>{
	return (n%2== 0 )
}


// method 2 - By bitwise and  O(1)TS 
const isEvenBitwiseAnd = (n)=>{
	return ((n &1 )==0) 
}

// method 3 - By bitwise right and left shift operators O(1)TS

const isEvenBitwiseShift = (n)=>{
	return (n == (n >> 1) <<1 )
}


console.log(isEvenBitwiseShift(4) )


