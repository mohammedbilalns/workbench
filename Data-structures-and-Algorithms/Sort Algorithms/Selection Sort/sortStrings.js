
function sortStrings(str){
    
   let arr = []
   for(let i=0 ; i<str.length ; i++){
       arr[i] = str[i]
   }
   
   for(let i=0 ; i<arr.length ; i++){
       let smallestIndex = i 
       for(let j = i ; j< arr.length ; j++){
           if(arr[j] < arr[i]){
               smallestIndex = j 
           }
       }
       
       [ arr[i], arr[smallestIndex]] = [ arr[smallestIndex], arr[i]]
   }
   
   let outputStr = ""
   for(let i=0 ; i<arr.length ;i++){
       outputStr+= arr[i]
   }
   
   return outputStr
}


console.log(sortStrings("helloworld"))
