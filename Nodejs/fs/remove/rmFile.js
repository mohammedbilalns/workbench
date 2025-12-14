import fs from "node:fs"

// callback based 
fs.unlink("sample.txt", (err)=>{
  if(err){
    console.error(`failed to delete file: ${err}`)
  }else{
    console.log("flie deleted successfully")
  }
})

