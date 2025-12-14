import fs from "node:fs"

// params: source , dest, opts , callback(err?)
fs.cp("sample", "sample2", {recursive: true},(err)=>{

  if(err){
    console.error(`Failed to copy: ${err}`)
  }else{
    console.log("File copied successfully")
  }
} )


