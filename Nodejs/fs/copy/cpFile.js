import fs from "node:fs"

fs.copyFile("sample/sample.txt", "sample/sample1.txt", (err)=>{
  if(err){
    console.error("Error: ", err)
  }else{
    console.log("file copied successfully")
  }
})

