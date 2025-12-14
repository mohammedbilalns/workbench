import { Router } from "express";
import authorController from "../controllers/authorController.js";

const router  = Router()


router.post('/add', authorController.addAuthor)
router.delete('/delete/:id', authorController.deleteAuthor)

export default router
