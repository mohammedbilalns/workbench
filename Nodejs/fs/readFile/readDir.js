import fs from "node:fs"

fs.readdir("sample", {encoding: "utf8", recursive: true}, (err, data)=>{
  if(err){
    console.error(`Failed to read the directory: ${err}`)
  }else{
    console.log(`Directory content: ${data} `)
  }
})

fs.read

