import fs from "node:fs"
import { promisify } from "node:util"

const cpPromise = promisify(fs.cp)

cpPromise("sample.txt", "sample2.txt")
  .then(()=> console.log("File copied successfully"))
  .catch(err => console.log(`Failed to copy the file: ${err}`))

