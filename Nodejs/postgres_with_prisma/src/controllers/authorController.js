import authorService from "../services/authorService.js"

 async function addAuthor(req,res){
  try {
    const {name} = req.body 
    
    const author = await authorService.addAuthor(name)
    res.status(201).json(author)
  } catch (err) {
    console.error(err)
  }
}



async function deleteAuthor(req,res){
	try {
		
		const deletedBooks = await authorService.deleteAuthor(id)
		res.status(201).json(deletedBooks)
	} catch (err) {
		console.error(err)
	}
}



export default {addAuthor, deleteAuthor}
