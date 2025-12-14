function rotate(nums: number[], k: number): void {
	k%=nums.length
	function rotate(start:number,end:number){
		while(start<end){
			[nums[start], nums[end]]  = [nums[end], nums[start]]
			start++ 
			end-- 
		}
	}
	rotate(0,nums.length-1)
	rotate(0,k-1)
	rotate(k, nums.length-1)    
};
