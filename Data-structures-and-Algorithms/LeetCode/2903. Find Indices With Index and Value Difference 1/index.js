

var findIndices = function(nums, indexDifference, valueDifference) {
    
   for(let i=0 ; i< nums.length ; i++){
		for(let j = 0 ; j< nums.length ; j++){
			if(Math.abs(i-j) >= indexDifference && Math.abs(nums[i]- nums[j]) >= valueDifference){
				return [i,j ]
			}
		}	

   }
	return [-1, -1]
};





console.log(findIndices([5,1,4,1],2,4))
