function plusOne(digits: number[]): number[] {
  digits[digits.length-1] = (digits[digits.length-1]+1) %10 
  for(let i=digits.length-2 ; i>= 0 ; i--){
    if(digits[i+1] == 0 ){
        digits[i] = (digits[i]+1)%10  
    }else {
        break 
    }
  }
  if(digits[0] ==0){
    digits.unshift(1)
  }
  return digits 
};



function plusOne2(digits: number[]): number[] {
  
  for(let i= digits.length-1 ; i>=0;  i--){
    if(digits[i]<9 ){
        digits[i]++ 
        return digits 
    }
    digits[i] = 0 
  }
  digits.unshift(1)
  return digits 
};


