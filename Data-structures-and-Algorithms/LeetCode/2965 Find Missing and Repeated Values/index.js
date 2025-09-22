

var findMissingAndRepeatedValues = function(grid) {
    
    let gridLength = grid.length
    let numberCount = gridLength * gridLength
    let actualSum = numberCount * (numberCount+1)/2
    let actualSquaresum = numberCount * (numberCount+1) * ((2*numberCount)+1)/6 

    let sum = 0 
    let squaresum = 0 
    for(let i=0;i<gridLength;i++){
        for(let j=0;j<gridLength;j++){
            sum+= grid[i][j]
            squaresum+= grid[i][j] * grid[i][j]
        }        
    }
    let ydelx = sum-actualSum
    let yplx = (squaresum - actualSquaresum)/ydelx 
    let y = (ydelx+yplx)/2 
    let x = yplx-y 

    return [y,x]
    
};



console.log(findMissingAndRepeatedValues([[9,1,7],[8,9,2],[3,4,6]]))