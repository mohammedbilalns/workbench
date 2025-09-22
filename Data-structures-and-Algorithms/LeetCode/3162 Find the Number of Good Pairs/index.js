var numberOfPairs = function(nums1, nums2, k) {
    
    let goodPairCount = 0 
    for(let i=0;i<nums1.length;i++){
        for(let j=0;j<nums2.length;j++){
            if(nums1[i]%(nums2[i]*k)==0){
                goodPairCount++
            }
        }
    }
    return goodPairCount
};




console.log(numberOfPairs([1,3,4],[1,3,4],1))