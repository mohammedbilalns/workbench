import zmq from "zeromq"


async function runClient(){
  console.log(`Connection to hello world server...`)

  const sock = new zmq.Request()
  sock.connect(`tcp://localhost:5555`)

  for(let i=0 ; i< 10 ; i++){
    console.log(`Sending Hello`, i)
    await sock.send('Hello')
    const [result] = await sock.receive()
    console.log(`Recieved `, result.toString(), i)
  }
}


runClient()
