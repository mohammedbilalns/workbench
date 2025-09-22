var isValid = function(s) {
   let stack = []
   let pairs = new Map([
    ['}','{'],
    [')','('],
    [']','[']
   ])

   for(let char of s){
    if(pairs.has(char)){
        if(stack.pop() !== pairs.get(char)){
            return false
        }
    }else {
        stack.push(char)
    }
   }


   return stack.length === 0
};
