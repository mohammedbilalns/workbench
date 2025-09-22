import  Book from "../models/book.js"
import asyncHandler from "../utils/asyncHandler.js"

export const getAllBooks = async (req,res) =>{
	const books = await Book.find()
	res.status(201).json(books)
}

export const getBook = async (req,res)=>{
	const {id} = req.params 
	const book = await Book.findById(id)
	res.status(201).json(book)
}


export const createbook = asyncHandler(async (req,res)=>{
	const bookData = req.body;
	const newBook = await Book.create(bookData)
	res.status(201).json({
		success:true , 
		message: 'Book added successfully',
		data: newBook
	})

})


export const updateBook = async (req,res) =>{
	const {id} = req.params
	const bookData = req.body 
	const book = await Book.findByIdAndUpdate(id, bookData)
	res.status(200).json({
		success:true , 
		message:"Book updated successufully",
		data:book 
	})
}


export const deleteBook = async (req,res) =>{
	const {id } = req.params 
	await Book.findOneAndDelete(id)
	res.status(200).json({success:true , message:"Book deleted successully"})
}




