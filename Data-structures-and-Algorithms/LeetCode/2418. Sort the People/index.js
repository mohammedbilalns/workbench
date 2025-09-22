


var sortPeople = function(names, heights) {
    
	let people = []
	for(let i= 0 ; i < names.length ; i++){
		people.push({name: names[i], height: heights[i]})
	}

   return people.sort((a,b) => b.height - a.height).map(elem => elem.name)
};



console.log(sortPeople(["Mary","John","Emma"], [180,165,170]))
