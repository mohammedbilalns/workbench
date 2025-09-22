

var interpret = function(command) {

    let interpretedText= [] 
    for(let i=0;i<command.length;i++){
        if(command[i]== "G"){
            interpretedText.push("G")
        }else if(command[i]=="("){
            if(command[i+1]==")"){
                interpretedText.push("O")
                i++
            }else if(command[i+1]=="a"){
                interpretedText.push("AL")
                i+=2
            }
        }
    }
    return interpretedText.join("")
};


console.log(interpret("G()(al)"))