import { Router } from "express";


const healthRouter = Router()

healthRouter.get("/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "OK",
  })
})



export const healthRoutes = healthRouter
