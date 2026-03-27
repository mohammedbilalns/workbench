package main

import (
	"fmt"
	"sync"
	"time"
)

func main(){
	// waitgroup -> counter letss main way for set of goroutines 
	// add the number of routines we have 

	var wg sync.WaitGroup

	wg.Add(3)

	go func(){
		defer wg.Done()
		fmt.Println("task 1")
		time.Sleep(250 * time.Millisecond)
		fmt.Println("task 1 finished")
	}()

	go func(){
		defer wg.Done()
		fmt.Println("task 2")
		time.Sleep(150 * time.Millisecond)
		println("task 2 finished")
	}()

	go func(){
		defer wg.Done()
		fmt.Println("task 3")
		time.Sleep(190 * time.Millisecond)
		println("task 3 finished")
	}()

	fmt.Println("main : waiting for all tasks to finish ")

	wg.Wait()
	fmt.Println("all tasks are now finished ")
}

