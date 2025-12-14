import fs from "node:fs"
import fsp from "node:fs/promises"
import os from "node:os"

function mkdirCallback(){
  // params: src, opts?:{recursive}, cb: (err, path)
  fs.mkdir("sample/sample2",{recursive: true}, (err,path)=>{

    if(err){
      console.error(`Failed to create directory: ${err}`)
    }else{
      console.log( `Created directory: ${path}`)
    }
  })
}

function mkdirSync(){
  try {
    fs.mkdirSync("sample/smpa", {recursive: true})
    console.log( `File created successfully`)
    
  } catch (err) {
    console.error(`Failed to create directory: ${err}`)
    
  }
}

async function mkdirPromise(){
  try {
    await fsp.mkdir("~/tsfd", {recursive: true})
    console.log("directory created successfully")
    
  } catch (err) {
    console.error(`Failed to creae directory: ${err}`)
    
  }
}


fs.mkdirSync(os.homedir()+"/hello")
