
var countDigits = function(num) {
  
    const strNum = String(num)
    const digitsArr = strNum.split('').map(elem=>parseInt(elem))

    let dividingDigtisCount = 0 

    digitsArr.forEach(elem=>{
        if(num%elem ===0){
            dividingDigtisCount++
        }
    })

    return dividingDigtisCount
};


console.log(countDigits(1248))