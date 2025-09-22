var numberGame = function(nums) {
    
    let sortedNum = nums.sort((a,b)=>a-b)
    let outputArr = []

    let random = 1 
    while(sortedNum.length!==0){

        if(random%2==0){
            outputArr.push(sortedNum[0])
            sortedNum.splice(0,1)
        }else{
            outputArr.push(sortedNum[1])
            sortedNum.splice(1,1)

        }
        random = (random+1)%2
    

    }

    return outputArr

};



console.log(numberGame([5,4,2,3]))