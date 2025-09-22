

var intersection = function(nums1, nums2) {
    let nums1Set = new Set(nums1)
    let resArr = [...new Set( nums2.filter(elem=>nums1Set.has(elem)))]
    return resArr
};


console.log(intersection([4,9,5],[9,4,9,8,4] ))