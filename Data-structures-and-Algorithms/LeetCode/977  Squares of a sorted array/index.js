var sortedSquares = function(nums) {
    
     return nums.map(elem => elem * elem).sort((a,b)=> a-b)
    
};




console.log(sortedSquares([-4,-1,0,3,10]))