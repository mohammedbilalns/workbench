import fs from "node:fs"

try{
  // params: source , dest, cpoptions 
  fs.cpSync("sampfsdfle.txt", "sample2.txt")
}catch(err){
  console.error("failed to copy file ", err)

}
