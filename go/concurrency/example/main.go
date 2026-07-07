package main

import (
	"fmt"
	"time"
)

func someFunc(num int){
	fmt.Println(num)
}

func main(){
	go someFunc(32)
	go someFunc(34)
	go someFunc(43)

	time.Sleep(time.Second)                                                         
	fmt.Println("hi")
}

