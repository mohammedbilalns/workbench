const  loadash = require("lodash")

const names  = ["sdfs","fsdfs","fsdfsd"]

const capitalNames = loadash.map(names,loadash.capitalize)
console.log(capitalNames)
