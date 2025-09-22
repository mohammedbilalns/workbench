import { Router } from "express";
import { getHome } from "../controllers/home-controller.js";
import { authMiddleWare } from "../middlwares/authMiddleware.js";

const router = Router()


router.get("/",authMiddleWare, getHome )
export default router
