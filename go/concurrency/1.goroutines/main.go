package main

import (
	"fmt"
	"time"
)

func main(){

	//tasks overlapping in time -> concurrency 
	// tanstsk executing in the exact same time -> parallelism 

	// go can be concurrent without being parallel 

	// Go Routine 
	// Lightweight independently executiong function in go, managed by go runtime  
	// concurrent execution of a function 
	
	start := time.Now()

	go func(){
		time.Sleep(300 * time.Millisecond)
		fmt.Println("go routing A : finished at ", time.Since(start))
	}()

	go func (){
		time.Sleep(150 * time.Millisecond)
		fmt.Println("Gorouting B, finieshed at", time.Since(start))
	}()

	// 
	fmt.Println("main: started two go routine at ", time.Since(start))

	// small work 
	fmt.Println("main: doing step 1 ", time.Since(start))
	time.Sleep(100 * time.Millisecond)


	fmt.Println("main: doing step 2 ", time.Since(start))
	time.Sleep(100 * time.Millisecond)


	fmt.Println("main: doing step 3 ", time.Since(start))

	time.Sleep((500 * time.Millisecond))

	fmt.Println("Main exiting at ", time.Since(start))

}

