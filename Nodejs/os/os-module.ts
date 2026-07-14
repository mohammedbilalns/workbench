import * as os from "node:os";

function main(){
  console.log("platform", os.platform())
  console.log("architecture", os.arch())
  console.log("os type", os.type())
  console.log("os release", os.release()) // 6.18 linux or something 
  console.log("home directory", os.homedir())
  console.log("temp directory", os.tmpdir())

  const cpus = os.cpus()
  console.log("cpus", cpus)

  console.log(os.totalmem(), os.freemem())

}
main()
