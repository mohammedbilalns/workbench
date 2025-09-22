


function mergeSort(arr){
    
   if(arr.length <2) return arr 
   
   let mid = Math.floor(arr.length/2)
   let left = arr.slice(0, mid)
   let right = arr.slice(mid)
   
   return merge( mergeSort(left), mergeSort(right))
}


function merge(left, right){
    
    let sortedArr = []
    let i=0 
    let j= 0 
    
    while(i< left.length && j< right.length ){
        if(left[i]<right[j]){
            sortedArr.push(right[j])
            j++
        }else{
            sortedArr.push(left[i])
            i++
        }
    }
    
    while(i<left.length){
        sortedArr.push(left[i])
        i++
    }
    
    while(j<right.length){
        sortedArr.push(right[j])
        j++
    }
    return sortedArr
 
}





console.log(mergeSort([6,2,8,3,7,3,6,3,9,3,6,3,7,2,7]))
