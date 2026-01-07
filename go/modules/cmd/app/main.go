package main

import (
	"fmt"
	"go-modules/internal/greet"
)

func main() {
	msg1 := greet.Hello("Bilal")

	fmt.Println(msg1)
}
