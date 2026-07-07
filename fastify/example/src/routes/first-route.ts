import { mongodb, } from "@fastify/mongodb"
async function routes(fastify, options) {
  fastify.get("/hello", async (request, reply) => {
    return { hello: "world" }
  })

  fastify.get("/animals", async (request, reply ) => {
    const result = await Collection("users")
    
    if(result.length === 0){
      throw new Error("No docs found")
    }
    return result 
  })
}

export default routes

