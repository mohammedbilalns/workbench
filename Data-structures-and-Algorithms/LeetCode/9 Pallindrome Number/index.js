// 
var isPalindrome = function(x){
     return x<0 ? true : x == +x.toString().split('').reverse().join('') 
}

console.log(isPalindrome(1221))
