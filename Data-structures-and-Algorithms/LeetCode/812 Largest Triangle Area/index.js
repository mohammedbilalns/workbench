var largestTriangleArea = function(points) {

    let maxArea = 0 
    for(let i=0;i<points.length;i++){
        for(let j=i+1;j<points.length;j++){
            for(let k=j+1;k<points.length;k++){
                let area = Math.abs(points[i][0]*(points[j][1]-points[k][1])+points[j][0]*(points[k][1]-points[i][1])+points[k][0]*(points[i][1]-points[j][1]))/2
                maxArea = area > maxArea ? area : maxArea
            }
        }
    }
    return maxArea
};

console.log(largestTriangleArea([[0,0],[0,1],[1,0],[0,2],[2,0]]))