
function sortObjects(arr){
    
    for(let i=0 ;i<arr.length ; i++){
        let smallestIndex = i 
        for(let j=i ; j<arr.length ; j++ ){
            if(arr[j].age< arr[smallestIndex].age){
                smallestIndex = j 
            }
        }
        
        [ arr[smallestIndex], arr[i]] = [ arr[i], arr[smallestIndex]]
    }
    return arr 
}







