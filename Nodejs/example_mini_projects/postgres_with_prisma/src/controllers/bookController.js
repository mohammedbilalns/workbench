import bookService from "../services/bookService.js"

export async function addBook(req,res){

	try {
		const {title, publishedDate, authorId} = req.body 
		const book = await bookService.addBook(title, new Date(publishedDate), authorId)
		res.status(201).json(book)
	} catch (err) {
		console.error(err)
		res.status(500).json({error:err.message})
	}}

export async function getAllBooks(req,res){

try {
	const books = await bookService.getAllBooks()
	res.status(201).json(books)
} catch (err) {
	console.error(err)
	res.status(500).json({error:err.message})
}}

export async function getBookById(req,res){

	try {
		const {id} = req.params
		console.log(req.params)
		const book = await bookService.getBookById(parseInt(id))
		res.status(201).json(book)
	} catch (err) {
		console.error(err)
		res.status(500).json({error:err.message})
	}}

export async function updateBook(req,res){

try {
	const {id} = req.params 
	const {title} = req.body 
	const book = await bookService.updateBook(id, title)
	res.status(201).json({message:"Book updated successfully", book})	
	
} catch (err) {
	console.error(err)
	res.status(500).json({error:err.message})
}}

export async function deleteBook(req,res){

	try {
		const {id} = req.params 
		await bookService.deleteBook(id)
		res.status(201).json({message:"Book deleted successfully"})
	} catch (err) {
		console.error(err)
		res.status(500).json({error:err.message})
	}}
