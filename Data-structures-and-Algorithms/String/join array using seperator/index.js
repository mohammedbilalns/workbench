  Array.prototype.join2 = function(seperator = ""){
        let result = ""
        for(let i=0 ; i<this.length ; i++){
            result += this[i]
            if(i< this.length-1){
                result+= seperator
            }
        }
        return result 
}

console.log(["3","8"].join2(""))
