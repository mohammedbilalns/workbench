const fs = require("fs")


fs.readFile("sample.txt", "utf8", (err, data)=>{
    if(err) return console.error(err)
    fs.writeFile("temp.txt",data, (err)=>{
        if(err) return console.log(err)
        console.log("Data written successfully")        
    } ) 
})
