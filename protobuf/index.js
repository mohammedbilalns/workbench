import fs from "fs"

const employees = []

employees.push({
  "name":"bilal", 
  "salary":9000,
  "id":1002
})

const another = {
  "name":"another name",
  "salary":43434,
  "id":3232
}

employees.push(another)

fs.writeFileSync("jsondata.json", JSON.stringify(employees))


console.log(JSON.stringify(employees))
