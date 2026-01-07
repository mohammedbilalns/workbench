package main

import "fmt"

func add(num1 int , num2 int) int {
	return num1+ num2
}

// function returns multiple values 
func SumAndProduct(a int , b int) (int ,int) {
	sum := a + b 
	product := a * b 

	return sum , product

}

func main(){
	// extract muliple returns from a function 
	s,p := SumAndProduct(32,23)
	onlySum , _ := SumAndProduct(23,53)

	fmt.Println(s,p,onlySum)

	fmt.Println(add(103,23))

}
