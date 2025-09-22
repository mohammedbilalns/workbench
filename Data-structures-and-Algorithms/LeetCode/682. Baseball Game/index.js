

var calPoints = function(operations) {
    
	let scores = [ ]

	for(let op of operations){
		if(op == "+"){
			scores.push(scores[scores.length-1]+ scores[scores.length-2])
		}else if (op == "D"){
			scores.push(2* scores[scores.length-1])
		}else if(op == "C"){
			scores.pop()
		}else {
			scores.push(Number(op))
		}
	}

	return scores.reduce((acc, elem)=> acc+elem , 0 )

};



console.log(calPoints(["5","-2","4","C","D","9","+","+"]))
