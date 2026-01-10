package main

import (
	"context"
	"fmt"
	"time"
)

// controlling timeouts
// cancelling go routins
// passing metadata across application


func main(){

}


func exampleTimeOut(){
	ctx := context.Background() // initiates backround context which doesn't timeout and has no values 

	ctxWithTimeOut , cancel := context.WithTimeout(ctx, 2 * time.Second) // context with timeout which takes another context as argument and the time 
	defer cancel()

	done := make(chan struct{})

	go func (){
		time.Sleep(3 * time.Second)
		close(done)
	}

	select {
	case <-done:
		fmt.Println("Called an api ")
	case <- ctxWithTimeOut.Done()
		fmt.Println("timeout expired")
	}
}
