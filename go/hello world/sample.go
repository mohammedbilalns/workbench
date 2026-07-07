package main

import (
	"fmt"
	"hello"
	"os"
)

func main(){
	if(len(os.Args)>1){
		fmt.Println("Hello", os.Args[1])

	}else{
		fmt.Println(hello.Say("World"))
	}
}


