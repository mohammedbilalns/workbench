import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { customLogger } from './utils/logger.js'

const app = new Hono()

app.use(logger(customLogger))

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post("/add/:productId",{}, (c) => {

  const productId = c.req.param("productId")

})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {

    customLogger(`Server is running on http://localhost:${info.port}`)
})
