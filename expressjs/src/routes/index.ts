import { Router } from "express"
import { healthRoutes as healthRouter } from "./health.routes"
import { authRouter } from "./auth.routes"


export const apiRouter = Router()


apiRouter.use(healthRouter)
apiRouter.use("/auth", authRouter)
