import fs from "node:fs"

fs.rmdir("sample",(err)=>{
  if(err){
    console.log(err, err)

  }else{
    console.log("removed directory ")
  }
})

