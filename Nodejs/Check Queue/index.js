const fs = require("node:fs")

fs.readFile(__filename , ()=> {
    console.log("this is  readFile 1 ")
    setImmediate(()=> console.log("this is inner setImmediat inside the readFile"))
    process.nextTick(()=>{
        console.log("this is inner process.nextTick inside readFile")
    })
    Promise.resolve().then(()=> {
        console.log("this is inner Promise.resolve inside readFile ")
    })
})

process.nextTick(()=> console.log("this is process.nextTick 1"))
Promise.resolve().then(() => console.log("this is promise.resolve 1 "))
setTimeout(()=> console.log("this is setTiemout 1 "),0)


for(let i=0;i<200 ; i++){}