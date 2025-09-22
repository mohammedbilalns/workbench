


var uncommonFromSentences = function(s1, s2) {
  
	let wordCount = new Map()

	function countWords(sentence){

		sentence.split(' ').forEach((word)=>{
			 wordCount.set(word, (wordCount.get(word)?? 0)+1 )
		})
		
	}	
	countWords(s1)
	countWords(s2)

	return [...wordCount.keys()].filter((word)=> wordCount.get(word)== 1)
};

console.log(uncommonFromSentences("this apple is sweet", "this apple is sour"))
