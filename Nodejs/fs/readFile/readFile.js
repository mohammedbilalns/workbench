import fs from "node:fs"
import fsp from "node:fs/promises"

function readFileCallback(){
  // params : src , options?:{encoding}, callback(err, data) 
  fs.readFile('sample.txt',{encoding:"utf8"}, (err, data)=>{
    if(err){
      console.log(`Failed to read the file: ${err}`)
    }else{
      console.log(`File Content: ${data}`)
    }
  })
}

function readFileSync(){
 try {
    // params: src , options?:{encoding}
    const content =  fs.readFileSync("sample.txt", {encoding: "utf8"},)
    console.log(`File Content: ${content}`)
 } catch (error) {
    console.error(`Failed to read the file: ${error}`)
  
 } 
}

async function readPromise(){
  try {

   const content =  await fsp.readFile("sample.txt",{encoding: "utf8"})
    console.log(`File Content: ${content}`)
    
  } catch (error) {
    console.error(`Failed to read the file: ${error}`)
    
  }
}

readPromise()
