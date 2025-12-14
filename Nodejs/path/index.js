import path, { extname } from "node:path"

const p = path.join("/home", "bilalnsmuhammed", "Downloads")
const res = path.resolve("../../../", "Downloads")
const base = path.basename("/home/bilalnsmuhammed/Downloads")
const dir = path.dirname("/home/bilalnsmuhammed/Downloads/")
const extName = path.extname("/home/bilalnsmuhammed/Downloads/chatgpt.png")
const parsed = path.parse("/home/bilalnsmuhammed/Downloads/chatgpt.png")
const formatted = path.format({
  dir: "/home/bilalnsmuhammed",
  name:"app",
  ext:".js"
})
const normalized = path.normalize("/home/bilalnsmuhammed//home/")
const isAbsolute = path.isAbsolute("/home/bilalnsmuhammed/")
