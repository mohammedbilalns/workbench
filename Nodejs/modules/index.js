

const firstModule = require("./first")


try{
	console.log(firstModule.divide(32,0))
}catch(error){
	console.log("Error", error)
}



