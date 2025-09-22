// question  move all occurences of target number to the end of the array

// Method 1
// Time complexity: O(n)
// Space complexity: O(1)

function moveNumbersToEnd(nums, target){
    let j = nums.length - 1;
    for(let i=0; i< j; i++){
        if(nums[i]==target){
            if(nums[j]!=target){
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }else{
                j--;
                i--;
            }
        }
    }
    return nums;
}
// Method 2  with more efficiency 

function moveNumbersToEnd2(nums, target){
    let left = 0;
    let right = nums.length - 1;
    while(left < right){
       
        while(left< right && nums[right]==target){
            right--;
        }
        if(nums[left]==target){
            [nums[left], nums[right]] = [nums[right], nums[left]];
            right--;
        }
        left++;
    }
    return nums;
}


console.log(moveNumbersToEnd([1,2,4,1,2,4], 1));
console.log(moveNumbersToEnd([1,2,4,1,2,4], 2));
console.log(moveNumbersToEnd([1,2,4,1,2,4], 4));
console.log(moveNumbersToEnd2([1,2,4,1,2,4], 1));
console.log(moveNumbersToEnd2([1,2,4,1,2,4], 2));
console.log(moveNumbersToEnd2([1,2,4,1,2,4], 4));