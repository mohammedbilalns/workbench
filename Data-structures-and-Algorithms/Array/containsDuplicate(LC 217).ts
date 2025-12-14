function containsDuplicate(nums: number[]): boolean {

  const visited = new Set()
  for(let i=0 ; i< nums.length ; i++){
    if(visited.has(nums[i])){
        return true 
    }
    visited.add(nums[i])
  }  
  return false 
};
