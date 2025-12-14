import { Router } from "express";
import { getProductsStats, insertSampleProducts ,getProductAnalysis} from "../controllers/productController.js";

const router = Router()

router.post('/add', insertSampleProducts)
router.get('/stats', getProductsStats)
router.get('/analysis', getProductAnalysis)

export default router
