package main

import "fmt"

func sumAll(nums ...int) (total int){
	total = 0 

	for _,num := range nums{
		total += num
	}
	return 
}


func main(){
	fmt.Println(sumAll(1,2,3,4,5,6,7,8,9))

	values := []int{10,43,43,34}

	fmt.Println(sumAll(values...))


	// anonymous functions 
	double := func(n int ) int {
		return n * 2
	}

	fmt.Println(double(2))

	// IIFE 
	res1 := func(a int, b int) int {
		return a + b
	}(5,10)

	fmt.Println(res1)
}
