import {PrismaClient} from "@prisma/client"

const prisma  = new PrismaClient()

  async function addBook(title, publishedDate, authorId){
	try {
		
		const newBook = await prisma.book.create({
			data:{
				title, 
				publishedDate,
				author: {
					connect: {id: authorId}
				}
			},
			include: {author: true}
			
		})
		console.log("new book", newBook)
		return newBook
	} catch (err) {
		console.error(err)
	}
}

  async function getAllBooks(){
	try{
		const books = await prisma.book.findMany({
			include:{author:true}
		})
		return books 

	}catch(err){
		console.error(err)
	}
}

  async function getBookById(id){
	try{
		const book  = await prisma.book.findUnique({
			where: {id},
			include:{author:true}
		})
		if(!book) throw new Error('Book with id not found ')
		return book 
	}catch(err){
		console.error(err)
	}
}

  async function updateBook(id, newTitle){
	try {
	const updatedBook = await prisma.$transaction(async (prisma)=>{
			const book = await prisma.book.findUnique({where:{id}})
			if(!book){
				throw new Error(`Book with the given id is not found`)
			}
			return prisma.book.update({
				where: {id},
				data:{ title:newTitle},
				include:{author:true}
			})
		})	
		return updatedBook
	} catch (err) {
		console.error(err)
	}

}

  async function deleteBook(id){
	try {
		const deleteBook = await prisma.book.delete({
			where:{id},
			include:{author: true}
		})
		return deleteBook 
	} catch (err) {
		console.error(err)	
	}
}

export default {addBook,getBookById,  getAllBooks, updateBook, deleteBook}
