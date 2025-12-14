import {spawn} from "node:child_process"

const process = spawn("lssdff", ["-la"])

process.stdout.on("data", (data)=>{
  console.log("Output: ", data.toString())
})

process.stderr.on("data", (data)=>{
  console.error("Error: ", data.toString())
})
