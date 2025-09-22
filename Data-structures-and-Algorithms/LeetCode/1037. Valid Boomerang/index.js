var isBoomerang = function(points){

	let slope1 = Math.abs((points[1][0]-points[0][0])/(points[1][1]-points[0][1]))
	let slope2 =Math.abs( (points[2][0]-points[1][0])/(points[2][1] - points[1][1]))
	return !(slope1 == slope2)
}


console.log(isBoomerang([[1,1],[2,3],[3,2]]))
