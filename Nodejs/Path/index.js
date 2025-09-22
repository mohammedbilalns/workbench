const path = require("path")

console.log("Directory is ", path.dirname(__filename))
console.log("name is ", path.basename(__filename))
console.log("Extension is ", path.extname(__filename))

const joinedPath = path.join("/user", "documents", "node")
console.log("Joined path ", joinedPath)

const resolvePath = path.resolve("user","documents")
console.log("Resolved path ", resolvePath)

const normalizePaht = path.normalize("/user/.documents/../node")
console.log("Normalized path ", normalizePaht)
