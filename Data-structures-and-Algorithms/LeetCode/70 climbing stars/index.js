var climbStairs = function(n) {
    
    let a = 1
    let b = 1 
    for(let i=1;i<n;++i){
        const c = a+b 
        a = b 
        b = c 
    }
    return b 
};

console.log(climbStairs(4))