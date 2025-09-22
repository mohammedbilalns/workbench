

var minMaxGame = function(nums) {
    
   while(nums.length >1){
	   let newArr = []

	   for(let i=0 ; i< nums.length/2 ;i++){
		   if(i%2 ==0 ){
			   newArr.push(Math.min(nums[2*i], nums[2* i+1 ]))

		   }else {
				newArr.push(Math.max(nums[2*i], nums[2*i+1]))
		   }
		
	   }
	   nums = newArr 

   } 


	return nums[0]


	


};



console.log(minMaxGame([1,3,5,2,4,8,2,2]))
