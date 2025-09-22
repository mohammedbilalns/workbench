

var findPeaks = function(mountain) {
    
	let peaks = []

	for(let i= 1 ; i< mountain.length-1 ; i++){
		if(mountain[i-1] < mountain[i] && mountain[i+1] < mountain[i]){
			peaks.push(i)
		}
	}
	return peaks 
};




console.log(findPeaks([1,4,3,8,5]))
