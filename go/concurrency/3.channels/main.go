package main

import (
	"fmt"
	"time"
)

func main() {
	// pipe -> to send data betweeen go routines

	// make(chan T)

	type User struct {
		ID   int
		name string
	}

	// carries user values
	ch := make(chan User)

	// worker routine
	go func() {
		time.Sleep(200 * time.Millisecond)

		// send : blocks until main recieves
		// unubuffered channesl , send + recieves (handshake )
		ch <- User{ID: 100, name: "fsdlnfds"} 

	}()

	fmt.Println("main: waiting to recieve user...")

	u := <-ch 

	fmt.Println("main: user", u , u.ID, u.name)
}
