import crypto from "node:crypto"
import fs from "node:fs/promises"

const hashedData = crypto.createHash("sha256").update("Hello world").digest("hex")

fs.writeFile("hashed.txt",hashedData)
  .then(()=> console.log("File written"))
  .catch((error) => console.log("Failed to write: " + error))

