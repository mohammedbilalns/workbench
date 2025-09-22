

var divide = function(dividend , divisor){
    let intMax = Math.pow(2,31)-1
    let intMin = -Math.pow(2,31)

    let divid = Math.abs(dividend)
    let divs = Math.abs(divisor)
    let answer = 0 
    while(divid>= divs){
        divid-= divs 
        answer++ 
    }
    
    if((dividend<0 && divisor>0) ||(dividend>0 && divisor<0)){
        answer = -answer
    }
    
    if(answer>intMax){
        answer = intMax
    }
    if(answer< intMin){
        answer = intMin
    }
    
    return answer 

    
}

console.log(divide(-2147483648,-1))