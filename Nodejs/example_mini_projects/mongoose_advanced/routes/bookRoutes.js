import { Router } from "express";
import {createAuthor,createBook , getBookWithAuthor } from "../controllers/bookController.js";
const router  = Router()
router.post('/author', createAuthor);
router.post('/', createBook);
router.get('/:bookId', getBookWithAuthor);

export default router