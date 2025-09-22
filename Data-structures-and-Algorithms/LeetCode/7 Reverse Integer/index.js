
// Method 1  - convert into string 
var reverse = function(num){

   return  parseInt(String(num).split('').reverse().join(''))

}

// Method 2 
var reverse2  = function(num){

let reversedNum = 0 

while(num!=0){
    
    let lastDigit = num % 10
    reversedNum = reversedNum * 10 + lastDigit 
    num = Math.trunc(num /10)

}

if( reversedNum> (Math.pow(2,31)-1)|| reversedNum < -(Math.pow(2,-31))) return 0 
return reversedNum


}


console.log(reverse(4234))