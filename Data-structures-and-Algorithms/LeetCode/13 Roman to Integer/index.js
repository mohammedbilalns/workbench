


var romanToInt = function(s) {

 let nums = {
    I:1 , 
    V:5 , 
    X:10 , 
    L:50 , 
    C:100 , 
    D:500 , 
    M:1000
 }

 let num = 0 
 for(let i= 0 ; i <s.length;i++){

    let sign = nums[s[i]] < nums[s[i+1]] ? -1 :1 
    num += sign * nums[s[i]]
 }
 return num
};

console.log(romanToInt('MCMXCIV'))