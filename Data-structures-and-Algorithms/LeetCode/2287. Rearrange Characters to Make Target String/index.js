


var rearrangeCharacters = function(s, target) {

	let sFreq = new Map()
	let targetFreq = new Map()

	for(let char of s ){
		sFreq.set(char, (sFreq.get(char) || 0 )+1)
	}
	for(let char of target){
		targetFreq.set(char, (targetFreq.get(char)|| 0)+1 )
	}


	let minCount = Infinity 

	for(let char of target){
		if(!sFreq.get(char)){
			return 0 
		}
		
		minCount = Math.min( minCount, Math.floor(sFreq.get(char)/ targetFreq.get(char)))
	}
	
	return minCount
};




console.log(rearrangeCharacters("ilovecodingonleetcode", "code"))
