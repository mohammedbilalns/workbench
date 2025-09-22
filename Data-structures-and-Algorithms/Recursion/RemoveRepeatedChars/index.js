

function removeCharacter(str, charToRemove){

	if(str.length == 0){
		return ""
	}
	
	const firstChar = str[0]

	if(firstChar == charToRemove){
		return removeCharacter(str.slice(1), charToRemove)
	}else {
		return firstChar + removeCharacter(str.slice(1), charToRemove)
	}
}


console.log(removeCharacter("lHello", "l"))
