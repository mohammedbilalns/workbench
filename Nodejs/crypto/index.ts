import crypto from 'node:crypto';

const random = crypto.randomUUID() // universally unique identifier

console.log(random)

const randomBytes = crypto.randomBytes(2).toString("hex") // can be used for generating random passwords otps 
console.log(randomBytes)

const hash = crypto.createHash("sha256").update("Hello world").digest("hex")
console.log(hash)

const secret = "some-secret key"
const message = "some random data"

const signature = crypto.createHmac("sha256", secret).update(message).digest("hex") 
console.log(signature)

const signatureVerify = crypto.createHmac("sha256", secret).update(message).digest("hex")
console.log(signatureVerify)
