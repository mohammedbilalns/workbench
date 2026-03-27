package main

import (
	"fmt"
	"os"
)

func main() {
	fileDetails, err := fileExists("./example.txt")
	if err != nil {
			fmt.Println("Failed ", err)
	}

	fmt.Println("File details", fileDetails)
}


func fileExists(path string ) (os.FileInfo , error) {
	data , err  := os.Lstat(path)

	if err != nil {
		fmt.Println("ERr", err)
	}

	return data , nil 
}

