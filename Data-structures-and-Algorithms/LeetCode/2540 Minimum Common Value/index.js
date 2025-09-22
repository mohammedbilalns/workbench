

var getCommon = function(nums1, nums2) {
    let secondIndex = 0 
    for(let i=0;i<nums1.length;i++){
        if(nums1[i]== nums2[secondIndex]) return nums1[i]
        if(nums1[i]>nums2[secondIndex]) {
            secondIndex++ 
            i--
        }
    }
};



console.log(getCommon([2,3,4,5],[1,2,3,6] ))