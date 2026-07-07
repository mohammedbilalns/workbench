package main

import "fmt"

type Counter struct {
	count int 
	isEmpty bool
	fsdf any
}

func (c *Counter) Increment(){
	c.count += 1 
	c.fsdf = "fsdf"
}

func NewCount() *Counter {
	return new(Counter)
}

func main(){
	counter := NewCount()
	fmt.Printf("counter %b", counter.isEmpty)

}
