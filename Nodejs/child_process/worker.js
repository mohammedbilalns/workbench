
process.on("message", (msg)=> {
  console.log("parent said", msg)
  process.send("Work done")
})
