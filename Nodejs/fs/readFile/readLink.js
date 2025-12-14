import fs from "node:fs"

fs.readlink("sm.txt",{encoding:"utf8"}, (err, link) => {
  if(err){
    console.error(`Failed to read the link: ${err}`)
  }else{
    console.log(`Original Location: ${link}`)
  }
})
