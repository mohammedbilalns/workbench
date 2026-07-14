import { Readable, Transform, Writable} from "node:stream"
import {pipeline} from "node:stream/promises"

const readableStream = Readable.from([
  "hello",
  " this ",
  "is ",
  "an",
  "array"
])

const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback){
    const text = chunk.toString()

    callback(null, text.toUpperCase())
  }
})

const writableStream = new  Writable({
  write(chunk, encoding, callback){
    console.log("Recieved chunk ", chunk.toString())
    callback()
  }
})


async function main(): Promise<void>{
  try {

    await pipeline(readableStream, upperCaseTransform, writableStream)
    console.log("Stream completed ")

  } catch (error) {
    const msg = error instanceof Error ? error.message: "unknown error"
    console.error("Error: ", msg)

  }
}
main()
