var majorityElement = function(nums) {
  
    let freqObj = nums.reduce((acc, elem)=>{
        acc[elem] = (acc[elem]?? 0)+1 
        return acc 
    },{})

    for(let [number, frequency]  of Object.entries(freqObj)){
        if(frequency>nums.length/2){
            return parseInt(number)
        }
    }
};



console.log(majorityElement([2,2,1,1,1,2,2]))