package main

import (
	"fmt"
)

type entity interface {
	getColor() string
}

type car struct {
	model  string
	color  string
	length int
}

type phone struct {
	model string
	color string
}

func (p phone) getColor() string {
	return p.color
}
func (c car) getColor() string {
	return c.color
}

func printValue(item interface{}) {
	switch v := item.(type) {
	case car:
		fmt.Printf("This is a car, and its color is %s \n", v.color)
	case phone:
		fmt.Printf("This is a phone ")
	}

}
func main() {

	mycar := car{color: "Red"}
	printValue(mycar)

}
