import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function addAuthor(name) {
	try {
		const newAuthor = await prisma.author.create({
			data:{
				name 
			}
		})
		return newAuthor
	} catch (err) {
		console.error(err)
	}
}

async function deleteAuthor(id){
	try {
		const books = await prisma.author.delete({
			where:{id},
			include:{books:true}
		})
		return books 
		
		
	} catch (err) {
		
	}
}

export default {addAuthor, deleteAuthor}
