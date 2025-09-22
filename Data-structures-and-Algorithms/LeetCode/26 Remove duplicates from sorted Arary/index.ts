// O(n)ST 
function removeDuplicates1(nums: number[]): number {
    let k = 0 
    let seen = new Set()

    for(let i=0 ; i< nums.length ; i++){
        if(!seen.has(nums[i])){
            nums[k++]= nums[i]
            seen.add(nums[i])
        }
    }
    return k 
};



// O(n)T , O(1)S
function removeDuplicates(nums: number[]): number {
    let k = 1 
    for(let i=1 ; i< nums.length ; i++){
        if(nums[i] !== nums[i-1]){
            nums[k++] = nums[i]
        }
    }
    return k 
};
