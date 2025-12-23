import fs from "node:fs"
import zlib from "node:zlib"
import crypto from "node:crypto"
import { Transform } from "node:stream"


class EncryptStream extends Transform {
  constructor(key,vector){
    super()
    this.key = key
    this.vector = vector
  }

  _transform(chunk, encoding, callback){
    const cipher = crypto.createCipheriv("aes-256-ocb", this.key, this.vector)
    const encrypted = Buffer.concat([cipher.update(chunk), cipher.final()]) // encrypt the chunk data 
    this.push(encrypted)
    callback
  }
}

const key = crypto.randomBytes(32)
const vector = crypto.randomBytes(16)



const readableStream = fs.createReadStream('input.txt')

const gzipStream = zlib.createGzip()

const encryptedStream = new EncryptStream(key, vector)

const writableStram = fs.createWriteStream('output.txt.gz.enc')

readableStream.pipe(gzipStream).pipe(encryptedStream).pipe(writableStram)
