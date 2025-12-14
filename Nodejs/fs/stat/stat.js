import fs from "node:fs"
fs.stat("sample.txt", (err, stat)=>{
  console.log(stat)
})

fs.statfs("sample.txt", (err, stat)=>{
  console.log(stat)
})
