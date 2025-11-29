const fs = require("fs")

fs.mkdir("sample foder", (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('Success')
    }
})