package main

import "fmt"

// array is fixed in size

func main(){

	// fixed and cannot grow , initizlizes with zeroes 
	var marks [3]int 
	marks[0] = 1 
	marks[2] = 3
	marks[1] = 32
	fmt.Println(marks)

	// array literal 
	res := [5]int{1,2,3,4,5}

	fmt.Println(len(res))

}
