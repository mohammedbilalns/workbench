

var generateKey = function(num1, num2, num3){

	let padNum = (num)=> (""+num).padStart(4,"0")
	let paddedNum1 = padNum(num1)
	let paddedNum2 = padNum(num2)
	let paddedNum3 = padNum(num3)

	let key = Math.min(paddedNum1[0],paddedNum2[0],paddedNum3[0])+""+Math.min(paddedNum1[1],paddedNum2[1],paddedNum3[1])+""+Math.min(paddedNum1[2],paddedNum2[2],paddedNum3[2])+ ""+ Math.min(paddedNum1[3],paddedNum2[3],paddedNum3[3])

	return parseInt(key) 
}



console.log(generateKey(2556, 21, 2096))
