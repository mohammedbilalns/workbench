var isValid = function(s) {
    
    let bracketStack = []

    let bracketMap = {
        '}':'{',
        ')':'(', 
        ']':'['

    }
    for(let i=0;i<s.length;i++){
        if(s[i]=='{'|| s[i]=='('|| s[i]== '['){
            bracketStack.push(s[i])
        }else if(s[i]== '}'|| s[i]==')'|| s[i]==']'){
            let lastvalue = bracketStack.pop()
            if(lastvalue !== bracketMap[s[i]]){
                return false 
            }
        }
    }

    return bracketStack.length ==0 
};





console.log(isValid("([)]"))