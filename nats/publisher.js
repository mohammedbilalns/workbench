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
    nc.publish("notif", sc.encode("Hello among us"))
  }catch(err){
    console.error(err)
  }

}

main()
