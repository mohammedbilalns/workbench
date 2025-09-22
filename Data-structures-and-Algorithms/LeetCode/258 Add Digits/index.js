var addDigits = function(num) {

    while(num>9){
        
        num = String(num).split('').map(Number).reduce((acc,elem)=>acc+elem)

    }
    return num 

};

console.log(addDigits(38))

