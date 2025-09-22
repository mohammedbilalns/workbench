var findFinalValue = function(nums, original) {

    const s = new Set([...nums])
    while(s.has(original)){
        original *=2
    }

    return original
    
};




console.log(findFinalValue([5,3,6,1,12], 3))