package main

import (
	"fmt"
	"math"
)

type shape interface { // collection of method signatures
	area() float64
	circumferance() float64
}
type rectangle struct {
	length  float64
	breadth float64
}

type circle struct {
	radius float64
}
type square struct {
	length float64
}

func (sq square) area() float64 {
	return sq.length * sq.length
}
func (sq square) circumferance() float64 {
	return sq.length * 4.0
}
func (circ circle) area() float64 {
	return float64(circ.radius) * math.Pi
}
func (circ circle) circumferance() float64 {
	return 2.0 * math.Pi * circ.radius
}

func printShapeInfo(s shape) {
	fmt.Printf("Area of %T: %.2f\n", s, s.area())
	fmt.Printf("Circumference of %T: %0.2f\n", s, s.circumferance())
}

func main() {

	// square1 := square{}
	// square1.length = 5.0

	// fmt.Println(square1.area())
	// fmt.Println(square1.circumferance())

	// circle1 := circle{}
	// circle1.radius = 10.0

	// fmt.Println(circle1.area())
	// fmt.Println(circle1.circumferance())

	shapes := []shape{
		square{length: 15.2},
		circle{radius: 54.3},
	}

	for _, v := range shapes {
		printShapeInfo(v)
		fmt.Println("---")
	}
}
