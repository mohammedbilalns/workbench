import express from "express";
import bodyParser from "body-parser";
import { encodeUser, decodeUser } from "../protos/user_pb.js";

const app = express();

app.use(bodyParser.raw({type: "application/x-protobuf"}));


app.post("/user", (req, res) => {
  try{
    const decodedUser = decodeUser(req.body)

    console.log("recieved user", decodedUser)

    const responseUser = {
      id: decodedUser.id,
      name: decodedUser.name.toUpperCase(),
      email: decodedUser.email.toLowerCase()
    }

    const buffer = encodeUser(responseUser)

    res.set("Content-Type", "application/x-protobuf").send(buffer)

  }catch(e){
    res.status(400).json({error: e.message})
  }
})

app.listen(3010, () => {
  console.log("Server running on port 3000 ")
})
