import { Code, ConnectError, type ConnectRouter, type HandlerContext } from "@connectrpc/connect";
import { ElizaService , type SayRequest } from "./gen/connectrpc/eliza/v1/eliza_pb.js";

export default (router: ConnectRouter) =>{
  router.service(ElizaService, {
    async  say(req: SayRequest, context : HandlerContext){
      console.log("handling", context.service.typeName, context.method.name)
      console.log("Foo", context.requestHeader.get("Foo"))
      return{
        sentence : `You said ${req.sentence}`
      }
    }
  })
}
