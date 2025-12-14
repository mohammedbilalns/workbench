import Author from "../models/Author.js";
import Book from "../models/Book.js";
import { asyncHandler } from "../utils/asyncHandler.js";


export const createAuthor = asyncHandler(async (req, res) => { 
  const author  = await Author.create(req.body);
  res.status(201).json(author);
 })


 export const createBook = asyncHandler(async (req, res) => {
  const book = await Book.create(req.body);
  res.status(201).json(book);
})


export const getBookWithAuthor = asyncHandler(async (req, res) => {
  const {bookId} = req.params;
  
  const book = await Book.findById(bookId).populate("author", "name bio");
  res.status(200).json(book);
})