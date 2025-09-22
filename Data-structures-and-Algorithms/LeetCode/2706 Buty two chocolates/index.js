
var buyChoco = function(prices, money) {

    let sortedPrice = prices.sort((a,b)=> a-b)
    
    if(prices.length<2 || sortedPrice[0]+sortedPrice[1]>money) return money

    return (money - (sortedPrice[0]+sortedPrice[1]))
};

console.log(buyChoco([3,2,3],3))