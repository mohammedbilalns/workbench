import {connect, StringCodec} from "nats"

const main = async () =>  {
  try{
    const nc = await connect({
      servers: [
        "0.0.0.0:4222"
      ]
    })
    console.log("connected to nats ")
    const sc = StringCodec()
    const sub = nc.subscribe("notif")
    for await (const m of sub){
      console.log(`[${sub.getProcessed()}] : ${sc.decode(m.data)}`)
    }

  }catch(err){
    console.error(err)
  }

}

main()
