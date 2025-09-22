const fs = require("fs");

// const readableStream = fs.createReadStream("./sample.txt", {
//   encoding: "utf-8",
// });

// readableStream.on("data", (chunk) => {
//   console.log(chunk);
// });

const writableStrem = fs.createWriteStream("./sample.sh");

writableStrem.write("fsdkjfnsdkjfn");
writableStrem.write("sfdjklnfjklnsdjklf");

writableStrem.close(() => {
  console.log("Finished writing ");
});
