package main

import (
	"fmt"
	"log"
	"strconv"
)

// go dont use exceptions for normal failures
// functions -> returns errors as normal return values
// val , err := someFunction()
// if err != nil {error handler }
func main(){

	if err := run(); err != nil{
		log.Fatal(err)
	}

}

func run() error {

	input := "30"

	level , err := parseLevel(input)
	if err != nil{
		return err 
	}
	fmt.Println("Selected level ",level)
	return nil 

}


func parseLevel(s string)(int , error){
	// (value , err)
	// nil error -> success 
	// non nil error -> failure 

	n , err  := strconv.Atoi(s) // function to convert string representation of a number to number 

	if err != nil{
		return 0 , fmt.Errorf("Level must be a number")
	}

	if n  < 1 || n > 5{
	 	return 0, fmt.Errorf("level must be 1 and 5 ")
	}

	return n , nil 

}
