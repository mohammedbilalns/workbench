

var findSpecialInteger = function(arr) {

    let frequencyObj = arr.reduce((acc,elem)=>{
        acc[elem] = (acc[elem]?? 0)+1 
        return acc
    },{})

    console.log(frequencyObj)
   
    for(let [elem,count] of Object.entries(frequencyObj)){
        if(count>= arr.length/4){
            return elem
        }
    }

};


console.log(findSpecialInteger([1]))