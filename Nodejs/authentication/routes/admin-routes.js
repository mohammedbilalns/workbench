import { Router } from "express";
import { getAdmin } from "../controllers/admin-controller.js";
import { authMiddleWare } from "../middlwares/authMiddleware.js";
import { isAdminUser } from "../middlwares/adminMiddleware.js";

const router = Router()

router.get("/",authMiddleWare, isAdminUser , getAdmin )
export default router
