import { log } from "node:console"
import { createReadStream, createWriteStream } from "node:fs"
import { pipeline } from "node:stream"
import { createGzip } from "node:zlib"

function createZipFromFile(filename, outname) {
  const gzip = createGzip()
  const source = createReadStream(filename)
  const destination = createWriteStream(outname)

  pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error("An error occured", err)
      process.exitCode = 1
    }
  })
}


async function createZipFromFileAsync(filename, outname) {

  const gzip = createGzip()
  const source = createReadStream(filename)
  const destination = createWriteStream(outname)
  try {
    await pipeline(source, gzip, destination)

  } catch (err) {
    log(err)
  }
}
