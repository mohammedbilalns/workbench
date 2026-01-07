package main

import "fmt"

func main(){
	points := map[string]int{
		"a":10,
		"b":32,
	}

	fmt.Println("a", points["a"])
	fmt.Println("b", points["b"])
	fmt.Println("c", points["c"]) // it will print 0 even if it is not in the points map 

	valB, okB := points["b"] // returns the value and boolean weather the value exists or not  
	fmt.Println (valB, okB)

	if val,ok := points["c"]; ok {
		fmt.Println(val)

	}else{
		fmt.Println("c is not present")

	}


	prices := map[string]int{
		"abc":423,
		"sdf":223,
	}

	// loop through the map 
	total := 0 
	for _, price := range prices {
		total = total + price
	}
	fmt.Println(total)
}
