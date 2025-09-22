// const buffer = new Buffer.from("fsdlkjnfsdn  ")


// buffer.write("Code")
// console.log(buffer)
// console.log(buffer.toJSON())
// console.log(buffer.toString())

// const buf = Buffer.alloc(10,16)
// buf.write("Hello world")
// console.log(buf.toString())


const buffOne  = Buffer.alloc(10)
console.log(buffOne)

const buffFromString = Buffer.from("Hello World")
console.log(buffFromString)

const buffFromArray = Buffer.from([1,2,3,4,5])
console.log(buffFromArray)
buffOne.write("Hello")
console.log(buffOne.toString())

const concatBuff = Buffer.concat([buffOne, buffFromString, buffFromArray])  

console.log(concatBuff.toString())
console.log(concatBuff.toJSON())