import fs from "node:fs/promises"

const arr = [1,2,3,4,4,5,5]

const res = arr.some((val) => val == 5)

if(res){
  const date = new Date()
  fs.writeFile("sample.txt",date.toString()).then(()=>{
    console.log("Wrote to the file")
  }).catch((err)=> console.log("Error: ", err))

}
