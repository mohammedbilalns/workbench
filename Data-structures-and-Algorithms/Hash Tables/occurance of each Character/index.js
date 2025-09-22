function freq(str){
	let freqMap = new Map()

	for(let i=0 ;i< str.length ;i++){
		freqMap.set(str[i], (freqMap.get(str[i])?? 0)+1)
	}
	return freqMap
}


console.log(freq("slfdfkjwnekr"))
