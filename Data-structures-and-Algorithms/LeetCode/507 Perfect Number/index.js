

var checkPerfectNumber = function(num){

    let positiveDivisors = []

    for(let i=1;i<num;i++){
        if(num%i=== 0) positiveDivisors.push(i)
    }

    let divisorSum = positiveDivisors.reduce((acc,elem)=>{
        acc+= elem
        return acc
    },0)

    if(num === divisorSum) return true 
    return false
}

console.log(checkPerfectNumber(7))