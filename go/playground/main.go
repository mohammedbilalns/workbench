package main

import "time"

type Book struct {
	title    string
	author   string
	numPages int

	isSaved bool
	savedAt time.Time
}



func (book *Book) saveBook(){
	book.isSaved = true
	book.savedAt = time.Now()
}

func (book *Book) getBook(){
	return book
}

func main(){

}
