function findMissingAndRepeatedValues(grid: number[][]): number[] {
    let len = grid.length* grid.length 
    const actualSum = (len * (len + 1)) / 2;
    const squareSum =  (len * (len + 1) * (2 * len + 1)) / 6;
    let currSum = 0 
    let currSquareSum = 0 
    for(let i=0 ; i< grid.length; i++){
        for(let j=0 ; j<grid.length; j++){
            currSum+= grid[i][j]
            currSquareSum += grid[i][j] * grid[i][j]
        }
    }
   const amb= currSum-actualSum 
   const apb= (currSquareSum - squareSum)/amb 
   const a = ( amb + apb)/2 
   const b = apb-a 
   return [a,b]
    
};
