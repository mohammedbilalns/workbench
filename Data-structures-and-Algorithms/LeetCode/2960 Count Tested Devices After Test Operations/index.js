

var countTestedDevices = function(batteryPercentages) {
    
    let test = 0 
    for(let i=0;i<batteryPercentages.length;i++){
        if(batteryPercentages[i]>0){
            test++ 
            for(let j=i+1;j<batteryPercentages.length;j++){
                if(batteryPercentages[j]>0){
                    batteryPercentages[j]--
                }
            }
        }
    }
    return test 
};



console.log(countTestedDevices([0,1,2]))