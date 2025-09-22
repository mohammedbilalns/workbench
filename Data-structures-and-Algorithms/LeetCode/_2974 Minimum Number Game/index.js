// You are given a 0-indexed integer array nums of even length and there is also an empty array arr. Alice and Bob decided to play a game where in every round Alice and Bob will do one move. The rules of the game are as follows:

//     Every round, first Alice will remove the minimum element from nums, and then Bob does the same.
//     Now, first Bob will append the removed element in the array arr, and then Alice does the same.
//     The game continues until nums becomes empty.

// Return the resulting array arr.

var numberGame = function (nums) {
    let arr = []
    while (nums.length != 0) {

        let aliceElemIndex = minIndex(nums)
        let aliceElem = nums[aliceElemIndex]
        nums.splice(aliceElemIndex, 1)
        let bobElemIndex = minIndex(nums)
        let bobElem = nums[bobElemIndex]
        nums.splice(bobElemIndex, 1)
        arr.push(bobElem, aliceElem)

    }


    function minIndex(arr) {

        let minIndex = 0
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > arr[minIndex]) {
                minIndex = i
            }
        }

        return minIndex
    }

    return arr.reverse()
}


console.log(numberGame([2,5]))