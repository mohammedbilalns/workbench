function twoSum(nums: number[], target: number): number[] {
    const visited = new Map()
    for(let i=0 ; i< nums.length ; i++){
        let rem = target- nums[i]
        if(visited.has(rem)){
            return [visited.get(rem), i ]
        }
        visited.set(nums[i], i)
    }
	return []
    
};
