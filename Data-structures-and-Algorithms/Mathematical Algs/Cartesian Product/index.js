// Given two finite non-empty sets, find their Cartesian product 


// O(nm)T
function cartesianProduct(arr1, arr2){

    let productArr  = []

    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            productArr.push([arr1[i], arr2[j]])
        }
    }
     return productArr
}

console.log(cartesianProduct([1,2,3,4], [5,6,7]))