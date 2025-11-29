import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { html } from 'hono/html'

const app = new Hono()

app.get('/', (c) => {
  return c.html(
    html `
<!doctype html>
<h1>Hello World</h1>
<script src="https://cdn.jsdelivr.net/npm/htmx.org@2.0.8/dist/htmx.min.js"></script>
<!-- have a button POST a click via AJAX -->
<button hx-post="/clicked" hx-swap="outerHTML">
  Click Me
</button>

`
  )
})


app.post("/clicked", (c) => {
  return c.text("You clickded the button")
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
    console.log(`Server is running on http://localhost:${info.port}`)
  })
