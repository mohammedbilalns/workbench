

var calculate = function(s) {
    
    let number
    let operation  
    let value = 0
    let answer = 0 
    for(let i=0;i<s.length;i++){
        if(/\d/.test(s[i])){
            value = value*10 + s[i]
        }
        if(s[i]=="+"|| s[i]=="-"|| s[i]=="*"||s[i]=="/"){
            answer = value 
            value  = 0 
            
            if(s[i]=="+"){
                operation = "+"
            }else if(s[i]=="-"){
                operation = "-"
            }else if(s[i]=="*"){
                operation = "*"
            }else if(s[i]=="/"){
                operation = "/"
            }
            
        }
    }
};



console.log(calculate("32+2*2"))