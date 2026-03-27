package main

import (
	"fmt"
	"time"
)

func main(){

	// select is like switch for the channels 
	// it lets a goroutine wait on multiple channels operations at once 

	resultCh := make(chan string)

	go func(){
		time.Sleep(400 * time.Millisecond)

		resultCh <- "worker channel"
	}()

	// timeout channel 
	timeoutCh := time.After(250 * time.Millisecond)

	select{
	case res := <- resultCh:
		fmt.Println("main: go result", res)
	case <-  timeoutCh:
		fmt.Println("main: timeout happened , stop waiting")
	}
}
