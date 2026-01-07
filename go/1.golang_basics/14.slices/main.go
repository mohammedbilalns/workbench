package main

import "fmt"


func main(){
	// most common collection type 
	// it is dynamic and can grow 

	results := []string{"hi", "hello"}

	fmt.Println(results[0])
	fmt.Println(len(results))

	var nums []int 
	nums = append(nums, 10) // add element to the nums slice 
	nums = append(nums, 32)
	fmt.Println(nums)
}
