var areaOfMaxDiagonal = function(dimensions) {
    let maxDiagonal = 0 
    let maxArea = 0 
    for(let i=0;i<dimensions.length;i++){
        let diagonalLength = dimensions[i][0]*dimensions[i][0]+dimensions[i][1]*dimensions[i][1]
        if(diagonalLength> maxDiagonal){
            maxDiagonal = diagonalLength 
            maxArea = dimensions[i][0]*dimensions[i][1]
        }else if(diagonalLength == maxDiagonal){
            maxArea = Math.max(maxArea, (dimensions[i][0]* dimensions[i][1]))
        }
    }
    return maxArea
};



console.log(areaOfMaxDiagonal([[3,4],[4,3]]))