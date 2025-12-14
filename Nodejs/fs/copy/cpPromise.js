import fs from "node:fs/promises"

async function  copyFile(){
  try{
    // params : source , dest, copyopts?
    await fs.cp("sfsdfample.txt", "sample2.txt")
    console.log("file copied successfully")
  }catch(err){
    console.error("Failed to copy file", err)

  }
}

copyFile()
