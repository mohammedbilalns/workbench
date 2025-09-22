

var judgeCircle = function(moves) {
    let position = [0,0]
    
    for(let i=0;i<moves.length ;i++){
        if(moves[i]== "R"){
            position[1]++
        }else if(moves[i]=="L"){
            position[1]--
        }else if(moves[i]=="U"){
            position[0]++
        }else if(moves[i]=="D"){
            position[0]--
        }
    }

    if(position[0]==0 && position[1]==0) return true 
    return false

};




console.log(judgeCircle("LL"))