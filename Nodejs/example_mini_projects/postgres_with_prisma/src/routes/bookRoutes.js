import { Router } from "express";
import { addBook, deleteBook, getAllBooks, getBookById, updateBook } from "../controllers/bookController.js";

const router = Router()

router.post('/add',addBook )
router.get('/get/:id', getBookById)
router.get('/all', getAllBooks)
router.patch('/update:id', updateBook)
router.delete('/delete:id',deleteBook )


export default router
