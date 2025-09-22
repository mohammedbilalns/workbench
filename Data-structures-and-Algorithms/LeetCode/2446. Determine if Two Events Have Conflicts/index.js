
var haveConflict = function(event1, event2) {
    
	function timeInInt(time){
		return parseInt(time.split(':').join(''))
	}
	
	let intEvent1 = [timeInInt(event1[0]), timeInInt(event1[1])]
	let intEvent2 = [timeInInt(event2[0]), timeInInt(event2[1])]
	
	if( (intEvent2[0] >= intEvent1[0] && intEvent2[0] <= intEvent1[1]) || (intEvent2[1] >= intEvent1[0] && intEvent2[0] <= intEvent1[1])){
		return true 
	}
    
	return false 
};




console.log(haveConflict(["01:00","02:00"],["02:00","03:00"]))
