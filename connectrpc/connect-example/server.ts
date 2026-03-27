import { fastifyConnectPlugin } from "@connectrpc/connect-fastify";
import { createValidateInterceptor } from "@connectrpc/validate";
import fastify from "fastify";
import routes from "./connect.js"


async function main(){
  const server = fastify()
  await server.register(fastifyConnectPlugin, {
    interceptors : [createValidateInterceptor()],
    routes,
  });
  server.get("/", (_ , reply ) =>{
    reply.type("text/plain")
    reply.send("Hello world")
  })

  await server.listen({host:"localhost", port : 8080})
  console.log(`Server listenting at ${server.addresses()}`)
}

void main()
