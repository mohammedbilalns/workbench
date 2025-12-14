import fs from "node:fs"

fs.mkdtemp("temp-", (err, folder) => {
  if(err){
    console.error(`Failed to create temp dir: ${err}`)
  }else{
    console.log(`${folder} created successfully `)
  }
})
