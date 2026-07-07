package main

import (
	"fmt"
	"time"
)

func main() {
	presentTime := time.Now()

	fmt.Println(presentTime)

	fmt.Println(presentTime.Format(("01-03-2005 15:04:05 Monday")))
}
