import { Controller, Get, InversifyHttpAdapter } from "@inversifyjs/http-core";
import type { Application } from "express";
import { Container } from "inversify";

const container = new Container()

const adapter  = new InversifyHttpAdapter(container)
const application : Application  = await adapter.build()

application.listen(3000)

interface message {
  content: string
}

@Controller()
export class MessageController{
  @Get('/hello')
  public async sayHello(): Promise<message>{
    return {content: "world"}
  }
}

