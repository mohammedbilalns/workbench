import {execFile} from "node:child_process"

console.time("execfile")
execFile("niri",["msg", "--json", "windows"], (err,stdout, stderr ) =>{
  if(err){
    console.error(`Error executing the file: ${err}`)
  }else if(stderr){
    console.error(`StdErr: ${stderr}`)
  }else{
    console.log("out : ", stdout )
  }
})
console.timeEnd("execfile")
