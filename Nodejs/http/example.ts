import http, { IncomingMessage, ServerResponse } from "node:http";

const PORT = 3000;

type CreateUserBody = {
  name: string,
  email: string
}

type ApiResponse<T> = {
  success : boolean;
  message: string;
  data?: T;
  error?: string 
}

function sendJson<T>(
  res : ServerResponse,
  statusCode: number,
  body: ApiResponse<T>
){
  res.statusCode = statusCode
  res.setHeader("Content-Type", "application/json")

  res.end(JSON.stringify(body))
}

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {

  const { method, url, headers } = req;
  console.log(`Request: ${method} ${url}`);

  const requestsUrl = new URL(url ?? "/", `http:${headers.host}`);

  const pathname = requestsUrl.pathname;

  res.setHeader("Content-Type", "application/json");

  if(method === "GET" && pathname === "/health") {

    sendJson(res,200,{
      success: true,
      message:"health",
    })
    return 
  }

  if(method === "POST" && pathname === "/users") {
    const chunks : Buffer[] = []

    req.on("data", (chunk) => {
      chunks.push(chunk)
    })

    req.on("end", () => {

      const rawBody = Buffer.concat(chunks).toString()
      if(!rawBody) {

        sendJson(res,400,{
          success: false,
          message:"Invalid body ",
        })
        return 

      }

      const body = JSON.parse(rawBody) as CreateUserBody

      if(!body.name || !body.email) {
        sendJson(res,400,{
          success: false,
          message:"Invalid body ",
        })
        return 
      }
    })
  }

  sendJson(res, 404, {success: false, message: "Not found", error:"path name doesnt not exists"})
})

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})

