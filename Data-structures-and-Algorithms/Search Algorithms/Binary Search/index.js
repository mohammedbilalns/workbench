// Given a sorted array of n elements and a target element t, find the index of t in the array. Return -1 if the target element is not found 


// Approach 1 :  O(log n )T
function binarySearch(arr, target) {

    let leftIndex = 0
    let rightIndex = arr.length - 1

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if (target === arr[middleIndex]) return middleIndex
        if (target < arr[middleIndex]) {
            rightIndex = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        }
    }
    return -1
}

// Approach 2(recursive) : O(log n)

function binarySearchRecursive(arr, target) { 
    return binarySearch(arr, target, 0, arr.length-1)
}
function search(arr, target, leftIndex, rightIndex){
    if(leftIndex > rightIndex) return -1

    let middleIndex = Math.floor((leftIndex + rightIndex)/2)
    if(target === arr[middleIndex]) return middleIndex
    if(target < arr[middleIndex]){
       return search(arr, target, leftIndex, middleIndex-1)
    }else{
       return search(arr, target , middleIndex+1,rightIndex)
    }
}


console.log(binarySearchRecursive([1,2,3,10,15,23],23))
