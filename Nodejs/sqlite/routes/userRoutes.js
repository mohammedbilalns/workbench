import { Router } from "express"
import { getUsers, registerUser } from "../controllers/userController.js"

const router = Router()


router.route("/")
  .get(getUsers)
  .post(registerUser)


export default router
