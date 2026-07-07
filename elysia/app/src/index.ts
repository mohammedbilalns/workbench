import openapi from "@elysiajs/openapi";
import { Elysia} from "elysia";

const app = new Elysia()
app.use(openapi())

app.get("/", () => "Hello Elysia")

app.get("/stream", function* () {
  yield "Hello"
  yield "World"
})

app.ws("/realtime", {
  message(ws, message){
    ws.send(message)
  }
})

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
