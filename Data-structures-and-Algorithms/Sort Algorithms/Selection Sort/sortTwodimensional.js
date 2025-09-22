
function sortTwoDimensional(arr){
   
   for(let i=0 ;i<arr.length ;i++){
       let smallest = i 
       for(let j=i+1 ; j< arr.length ; j++){
            let smallestSum = arr[smallest][0] + arr[smallest][1]
           let currSum = arr[j][0]+ arr[j][1]
           
           if(currSum< smallestSum){
               smallest =j 
           }
       }
       [arr[smallest], arr[i]]  = [arr[i], arr[smallest]]
   } 
   return arr 
}



console.log( sortTwoDimensional([[9,6],[1,2],[5,2]]))
