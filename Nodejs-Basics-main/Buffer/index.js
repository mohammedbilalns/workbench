// const buffer = new Buffer.from("fsdlkjnfsdn  ")


// buffer.write("Code")
// console.log(buffer)
// console.log(buffer.toJSON())
// console.log(buffer.toString())

const buf = Buffer.alloc(10,16)
buf.write("Hello world")
console.log(buf.toString())