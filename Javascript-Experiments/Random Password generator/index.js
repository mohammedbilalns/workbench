const result = document.getElementById("result")

function generatePassword(){

    const digitnumber = document.getElementById("digitnumber").value
    const lowercase = document.getElementById("lowercase")
    const uppercase = document.getElementById("uppercase")
    const numbers = document.getElementById("numbers")
    const symbols = document.getElementById("symbols")

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symoblChars  = "!@#$%^&*+=-";

    let allowedChars = ""
    let password = ""

    allowedChars+= lowercase.checked ? lowercaseChars : "";
    allowedChars+= uppercase.checked ? uppercaseChars : "";
    allowedChars+= numbers.checked ? numberChars : "";
    allowedChars+= symbols.checked ? symoblChars : "";
    

    if(allowedChars.length === 0 ){
        result.textContent =  `Atleast one set of charecters need to be selected`
    }

    for(let i=0; i < digitnumber ; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length)
        password += allowedChars[randomIndex]
    }

    result.textContent = password;
}



