

var finalValueAfterOperations = function(operations) {
    let  result = 0 
    operations.forEach(elem => {
        if(elem =="++X" || elem=="X++"){
            result +=1
        }else if(elem == "X--"|| elem == "--X"){
            result -=1
        }
    })
    return result
    
};



console.log(finalValueAfterOperations(["X++","++X","--X","X--"]))