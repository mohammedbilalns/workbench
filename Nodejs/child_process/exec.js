import {exec} from "node:child_process"

console.time("a")
exec("niri msg --json windows",(error, stdout, stderr) => {
  if(error){
    console.error("Failed to run command: ", error)
  }else if(stderr){
    console.error("stdErr: ", stderr)
  }else{
    console.log(`stdOut: ${stdout}`)
  }

})

console.timeEnd("a")
