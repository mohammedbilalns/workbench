
function fetchData(callback){
	setTimeout(()=>{
		callback("Hello world")
	}, 1000)
}


module.exports= fetchData
