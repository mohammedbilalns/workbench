package main

import (
	"fmt"
	"strings"
)



func main(){
	firstName := "Mohammed"
	secondName := "Bilal"

	fullName := firstName + " " + secondName

	fmt.Println(fullName)

	// Methods for cases 
	fmt.Println(strings.ToUpper(fullName)) // convert to uppercase 
	fmt.Println(strings.ToLower(fullName))
	fmt.Println(strings.ToTitle(fullName))
	// -  ? special methods 

	const substr = "Hi"
	const str = "Hi Hello"
	fmt.Println(strings.Contains(str,substr)) // check a string is substring of another 




}
