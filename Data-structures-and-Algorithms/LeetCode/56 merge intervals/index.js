

var merge = function(intervals) {
    
    intervals = intervals.sort((a,b)=> a[0]-b[0])
    for(let i=0;i<intervals.length-1;i++){

        if(intervals[i][1]>= intervals[i+1][0]){
            let left = intervals[i][0] < intervals[i+1][0] ? intervals[i][0]: intervals[i+1][0] 
            let right = intervals[i+1][1] > intervals[i][1]? intervals[i+1][1]: intervals[i][1]
            intervals.splice(i,2,[left,right])
            i--
        }
    }
    return intervals
};


console.log(merge([[1,4],[0,0]]))