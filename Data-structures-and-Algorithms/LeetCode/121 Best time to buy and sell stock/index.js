

var maxProfit = function(prices) {
  
    let smallest = Infinity 
    let maxProfit = 0 

    for(let i=0;i<prices.length;i++){
        if(prices[i]<smallest){
            smallest = prices[i]
        }

        let profit = prices[i]-smallest
        if(profit> maxProfit){
            maxProfit = profit
        }
        
    }

    return maxProfit

};


console.log(maxProfit([7,1,5,3,6,4]))