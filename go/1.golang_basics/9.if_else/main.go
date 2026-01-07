package main

import "fmt"


func main(){

	score := 32 

	if score >= 90 {
		fmt.Println("A")
	}else if score >= 80 {
		fmt.Println("B")
	}else {
		fmt.Println("failed")
	} 
}
