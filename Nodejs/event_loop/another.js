
const fs = require("fs")
const crypto = require("crypto")

console.log(`1., script start `)


setTimeout(() => {
  console.log("2.settime out 0s callback macrotask")
},0)


setTimeout(() => {
  console.log(`3. settime out 0s callback `)
})


setImmediate(() =>{
  console.log(`4.setImmediate`)
})

Promise.resolve().then(() => {
  console.log("6. process.nexttick callback ")
})

fs.readFile(__filename, () => {
  console.log(`7. file read operations `)
})


crypto.pbkdf2(`secret`, 'salt', 10000, 64, 'sha512', (err, key) => {
  
  console.log(`8. cpu intensive task `)
})


console.log('script ends ')
