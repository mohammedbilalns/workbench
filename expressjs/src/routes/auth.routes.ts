import { Router } from "express";
import { loginUser, registerUser } from "../services/auth.service";


export const authRouter = Router()



authRouter.post("/register", async(req, res, next) => {
  try {
    const {email, password}  = req.body 
    await registerUser(email, password)

    res.status(201).json({
      success: true ,
      message : "Registration successful"
    })
    
  } catch (error) {
    next(error)
  }
})

authRouter.post("/login", async(req, res, next) => {
  try {

    const {email , password } = req.body 
    
    await loginUser(email,password)

    res.status(200).json({
      success: true,
      message : "Login successful "
    })
    
  } catch (error) {
    next(error)
    
  }
})
