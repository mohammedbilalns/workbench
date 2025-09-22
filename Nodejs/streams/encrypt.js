const fs = require("node:fs");
const zlib = require("node:zlib");
const crypto = require("node:crypto");
const {Transform} = require("node:stream");

class EncryptStream extends Transform {
  constructor(key, vector){
    super();
    this.key = key;
    this.vector = vector;
  }

  _transform(chunk, encoding, callback) {
    const cipher = crypto.createCipheriv('aes-256-cbc', this.key, this.vector)
    const encrypted = Buffer.concat([cipher.update(chunk), cipher.final()]);
    this.push(encrypted);
    callback();
  }
}

const key = crypto.randomBytes(32); 
const vector = crypto.randomBytes(16);

const readableStream = fs.createReadStream("./file.txt")
const gzipStream = zlib.createGzip()

const encryptStream = new EncryptStream(key, vector);
const writableStream = fs.createWriteStream("./file.txt.gz.enc");

readableStream.pipe(gzipStream).pipe(encryptStream).pipe(writableStream)
console.log('Streaming encryption started...');

writableStream.on('finish', () => {
  console.log('Streaming encryption completed.');
});
