import zeromq from "zeromq"

async function runServer(){
  const sock = new zeromq.Reply();

  await sock.bind(`tcp://*.5555`)

  for await (const [msg] of sock){
    console.log(`Recieved ` + `: [` + msg.toString() +  `]`)
    await sock.send(`World`)
  }
}

runServer()
