import fs from "node:fs"

// write to file overriting its content if exists 

function writeToFile(){
  fs.writeFile("sample.txt", "fsdjfls fksd f", (err)=>{
    if(err){
      console.error("Failed to write to file ")
    }else{
      console.log("Written to file")
    }
  })
}

function appendToFile(){
  fs.appendFile("sample.txt", "\ntext to append", (err)=>{
    if(err){
      console.error("Failed to append to the file" + err)
    }else{
      console.log("appended o the file ")
    }
  })
}

appendToFile()
