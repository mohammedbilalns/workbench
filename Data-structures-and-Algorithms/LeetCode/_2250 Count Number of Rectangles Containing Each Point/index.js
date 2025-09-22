var countRectangles = function(rectangles, points) {
    
    const countArr = []
    
    for(let i=0;i<points.length;i++){
        let count = 0 
        for(let j=0;j<rectangles.length;j++){
            if(rectangles[j][0]>=points[i][0]&& rectangles[j][1]>=points[i][1]){
                count++
            }
        }
        countArr.push(count)
    }
    
    return countArr
};