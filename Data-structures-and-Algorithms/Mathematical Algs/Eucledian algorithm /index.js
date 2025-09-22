
let gcd = function(a,b){

    if(a<b){
        let temp = a 
         a = b 
        b = temp 
    }
    while(b!= 0 ){
        let r = a%b 
        a = b 
        b = r 
    }
    return a 
}


console.log(gcd(3,30))         