var furthestDistanceFromOrigin = function(moves) {

    let lCount = 0 
    let rCount = 0 
    let _count = 0 

    for(let i=0;i<moves.length;i++){

        if(moves[i]=="L") lCount++
        else if(moves[i]=="R") rCount++
        else if(moves[i]=="_") _count++
    }
    return Math.abs(lCount-rCount+_count)
};



console.log(furthestDistanceFromOrigin("L_RL__R"))