package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	welcome := "Welocome to user input "
	fmt.Println(welcome)

	reader := bufio.NewReader(os.Stdin) // reference
	fmt.Println("Enter the rating ")

	input, _ := reader.ReadString('\n')
	fmt.Println("Thanks for rating, ", input)
	fmt.Printf("Type of rating is %T\n", input)

}
