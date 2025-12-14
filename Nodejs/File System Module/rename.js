const fs = require("fs")

fs.rename('temp.txt', "sample.txt", (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('Success')
    }
})