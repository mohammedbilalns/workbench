package main

import "fmt"

// pointer stores the memory address of any value
// &x -> address of x (creates a poiner)
// *p -> deref (go to that address and read/ write)

func main(){

	score := 10 
	fmt.Println("before: ", score)

	addScore(&score)
	fmt.Println("after: ", score)
}



func addScore(score *int){
	*score = *score + 5  // update the value in the memory address 
}
