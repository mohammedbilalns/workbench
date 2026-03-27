import axios from "axios";
import {encodeUser , decodeUser} from "../protos/user_pb.js"
async function run() {

  const userPayload = {
    id: 1,
    name: "Bilal",
    email: "bilal@example.com"
  };

  const buffer = encodeUser(userPayload)

  console.time("network")
  const res = await axios.post(
    "http://localhost:3010/user",
    buffer,
    {
      headers: {
        "Content-Type": "application/x-protobuf"
      },
      responseType: "arraybuffer"
    }
  );
  console.timeEnd("network")

  const responseUser = decodeUser(res.data);
  console.time("api")
  console.log("Response:", responseUser);
}

run();
