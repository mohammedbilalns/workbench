package main

import (
	"fmt"
	"sync"
	"time"
)

// Goroutines
// --For every go program the main goroutine is created
// --It is kind of  like a thread managed but managed by the go scheduler instead of the host os
// --Go routines comparitevely lighter than threads managed by the os( a typical go routine has size about 2-4 kb at initial and they are dynamically resized as the requirements )
// --Go handles concurrency using goroutines
// --Other go routines are spawn from the main go routines and when the main go routine returns all the gorouteines will be terminate

func say(s string ){
	for range 5{
		time.Sleep(100 * time.Millisecond)
		fmt.Println(s)
	}
}
func routineExample(){
	go say("Hi")
	say("Hello")

}
func main(){
	channelEx()

}

// Channels 
// -- Data structures to share data between two go routines  
// -- It is a reference type 
// -- recieving data from a channel is blocking operation
// -- there are two types of channels buffered onees and unbuffered ones 
// -- Buffered channels acts like a queue ( in produceer consumer scenario)
// -- Unbuffered channels are blocking (mostly used for synchronizing go routines ) 
func sum(s []int, c chan int ){
	sum := 0 
	for _,v := range s {
		sum += v 
	}

	c <- sum // send sum to c  
}

func channelEx(){
	s := []int{43,34,34,23,23}
	c := make(chan int)
	go sum(s[:len(s)/2], c)
	go sum(s[len(s)/2:], c)
	x,y := <-c , <-c // recieve data from the channel 

	fmt.Println(x,y,x +y )
}

func bufferedChan(){
	ch := make(chan int , 2) // 2 is the size of the queue until it is full we can push into it 
	ch <- 1 
  ch <- 2	
	fmt.Println(<-ch)
	fmt.Println(<-ch)
}

// Ranging over channels 

func fibonacci1(n int , c chan int){
	x , y := 0 ,1 
	for range n {
		c <-x 
		x,y = y , x+y
	}
	close(c) // used to send the broadcast signal to the parent go routine that the sending is finished 
}

func UnbufferedChan(){
	 c := make(chan int , 10)
	go fibonacci1(cap(c),c)
	for i:= range c { // this loop will run until the close is called on the sub routine 
		fmt.Println(i)
	}
}

// selecting on channels 

func fibonacci(c , quit chan int){
	x, y := 0, 1 
	for {
		select { // select is like switch concurrently checking the values  
		case c <-x:
			x, y = y , x+y 
		case <-quit:
			fmt.Println("quit")
			return 
		}
	}

}

func selectExample(){
	c := make(chan int)
	quit := make(chan int)

	go func(){
		for range 10 {
			fmt.Println(<-c)
		}
		quit <- 0 
	}()

	fibonacci(c, quit)

}

// Mutex 
// -- lock for concurrency safe mutation and access 

type SafeCounter struct {
	mu sync.Mutex
	v map[string]int
}

func (c *SafeCounter) Inc(key string) {
	c.mu.Lock()

	c.v[key]++

	c.mu.Unlock()
}

func (c *SafeCounter) Value(key string) int {
	c.mu.Lock()

	defer c.mu.Unlock()
	return c.v[key]
}

func exMutex(){
	c := SafeCounter{v: make(map[string]int)}
	for range 1000 {
		go c.Inc("Somekey")
	}

		time.Sleep(time.Second)
		fmt.Println(c.Value("Somekey"))

}

