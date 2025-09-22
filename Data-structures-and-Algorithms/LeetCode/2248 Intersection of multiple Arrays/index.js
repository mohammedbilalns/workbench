
var intersection = function(nums) {

	let intersectionArr = []
	for(let i=0;i<nums[0].length;i++){

		let isContained = true 
		for(let j=1;j<nums.length;j++){
			if(!nums[j].includes(nums[0][i])){
				isContained = false 
			}
		}

		if(isContained) intersectionArr.push(nums[0][i])
	}
	
	return intersectionArr.sort((a,b)=> a-b)
};



console.log(intersection([[4,43,15,30,27,22],[15,30,43,27,10,4]]))
