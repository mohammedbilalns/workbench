package main

import (
	"errors"
	"fmt"
)

func main(){

	fmt.Print("case 1: success")
	if err := doWork(true); err!= nil {
		fmt.Println("error:", err)
	}

	fmt.Println("case 2: fail early")
	if err := doWork(false); err!= nil {
		fmt.Println("error:", err)
	}

}

func doWork(success bool ) error {
	// startup message 

	fmt.Println("start: resource acquired")

	// deer will guarentte this runst at the of this function in both the paths 
	// - success returns and error returns 
	// - can be used for cleanuping 
	defer fmt.Println("cleanup: resource released")

	if !success{
		return errors.New("Something went wrong, returning early")
	}

	fmt.Println("work: doing some actual work ")
	fmt.Println("work: work is done")

	return nil 
}
