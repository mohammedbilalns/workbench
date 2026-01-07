package main

import "fmt"



func main(){

	items := 3
	pricePerItem := 43

	if total := items * pricePerItem; total > 100 { // declare and check 
		fmt.Println("eligible")
	}else{
		fmt.Println("Not eligible")
	}

}
