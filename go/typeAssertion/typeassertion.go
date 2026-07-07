package main

import "fmt"

type shape interface {
	area() float64
}
type square struct {
	side float64
}

func (sq square) area() float64 {
	return sq.side * sq.side
}

func main() {

	sqr1 := square{side: 5}
	var sh shape
	sh = sqr1            // assigns the interface the value of sqr1
	a, ok := sh.(square) //assert the square to the interface
	if ok {
		fmt.Println("this is square")
		fmt.Println(a.area())
	}

}
