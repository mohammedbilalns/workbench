const fs = require("node:fs")

setTimeout(() => console.log("this is setTimeout 1 "),0)

fs.readFile(__filename, ()=>{
    console.log("This is readfile 1")
})

process.nextTick(()=> console.log("this is process.nextTick 1"))
Promise.resolve().then(() => console.log("this is Promise.resolve 1"))

setImmediate(()=>console.log("This is setImmediate 1") )
