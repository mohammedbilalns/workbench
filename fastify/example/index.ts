import Fastify, { type FastifyInstance} from "fastify"
import firstRoute from "./src/routes/first-route.jss"

const fastify :FastifyInstance = Fastify({
  logger: true,
})

fastify.register(firstRoute)

fastify.route({
  method:"GET",
  url: "/hi",
  schema: {
    // Request needs to have a query string with a name parameter 
    querystring: {
      type: "object",
      properties: {
        name: {type: 'string'}
      },
      required: ['name']
    },
    // response needs to be an object with an hello property of type string 
    response: {
      200: {
        type: 'object',
        properties: {
          hello : {type: 'string'}
        ee
      }
    }
  },
  // function to exectue for every request before the handler is exected 
  preHandler: async (request, reply) => {
    console.log("preHandler")
  },
  handler: async (request, reply) => {
    return {hello : 'world'}
  }
})

fastify.get("/", async function handler (request, reply){
  return { hello: "world" }
})


try {

  await fastify.listen({
    port: 3000
  })

} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}
