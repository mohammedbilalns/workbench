import { Router } from "express";
import { createbook, deleteBook, getAllBooks, getBook, updateBook } from "../controllers/book-controller.js";

const router = Router()



router.get('/',getAllBooks)
router.get('/:id', getBook)
router.post('/', createbook)
router.put('/:id', updateBook)
router.delete('/:id', deleteBook)



export default router

