import {fork} from "node:child_process"
const child = fork("./worker.js")

child.on("message", (msg)=> {
  console.log("mesage from child", msg)
})

child.send("Start work")
