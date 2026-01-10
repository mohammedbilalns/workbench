import { Carno, Controller, Get } from "@carno.js/core"


@Controller()
class AppController {
  @Get()
  hello(){
    return "Hello world"
  }

}

const app = new Carno()
app.controllers([AppController])
await app.listen(3000)
