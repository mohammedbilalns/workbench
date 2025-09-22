var simplifyPath = function(path){
	let stack = []
	let currPath = ""

	for(let char of path){
		if(char == "/"){
			if(currPath == ".."){
				if(stack.length) stack.pop()	
			}else if(currPath !== "" && currPath !== "."){
				stack.push(currPath)
			}
			currPath = ""
		}else {
			currPath+= char 
		}
	}

	if(currPath == ".."){
		stack.pop()
	}else if(currPath !== "." && currPath !== "" ){
		stack.push(currPath)
	}

	return  "/"+ stack.join('/')
}




console.log(simplifyPath("/home//foo/"))
