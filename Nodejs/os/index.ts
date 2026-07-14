
import { log } from "console"
import {arch, availableParallelism, constants, cpus, devNull, homedir, hostname, loadavg, machine, networkInterfaces, release, tmpdir, totalmem, type, uptime, userInfo, version} from "os"
const availableThreadorCors = availableParallelism() // returns how many concurrent woker processes/ threads to best utlize the resources
const architecture  = arch() // cpu arch usually  64 or  32 bit 
//log(constants) // common os constants like error and signalling and priority ones 
console.log(devNull) // dev null path of the os 
log(hostname())
log(loadavg())
log(machine())
log(networkInterfaces())
log(type())
log(uptime()/60/60)
log(userInfo())
log(version())
