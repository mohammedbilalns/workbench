
// Objects to handle raw  binary data 
// fixed length 
// usecases : fs operations , cryptograpy , image processing 

const buffOne = Buffer.alloc(10) // allocates a buffer of 10 bytes -> zeroes 

const buffFromSTring = Buffer.from("Hello")

const buffFromArrayOfInt = Buffer.from([1,2,3,5,6])

buffOne.write("Node js")
console.log(buffFromSTring[0]) // read each byte 
buffOne.slice(0,1); // slicing 

const concated = Buffer.concat(buffOne, buffFromSTring) // concating 

console.log(buffFromSTring.toJSON())

