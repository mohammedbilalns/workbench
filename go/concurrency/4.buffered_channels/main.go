package main

import (
	"fmt"
	"time"
)

func main() {
	// buffered channel has a capacity
	// can hold limited no of values ,
	// sender only block when the buffer is full
	// reciever only block when it is empty

	// can store 2 jbos without a reciever
	jobs := make(chan string, 2)

	go func() {

		fmt.Println("produce sending job 1 ")
		jobs <- "job-1"

		fmt.Println("producer sending job 2 ")
		jobs <- "job-2"

		fmt.Println("producer sending job 3, wait until the current jobs finishes")
		jobs  <- "job-3"

		fmt.Println("producer: send all jobs")
		close(jobs) // close the sender when all jobs are finineshed 

	}()

	for job := range jobs {
		fmt.Println("consumer got", job)

		time.Sleep(300 * time.Millisecond)

		fmt.Println("consumer finished", job)
	}

	fmt.Println("main: all jobs are completed ")


}
