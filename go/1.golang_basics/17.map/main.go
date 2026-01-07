package main

import "fmt"


func main(){
	// map[keyType]valueType
	ages := map[string]int{
		"a":1,
		"b":2,
		"c":3,
	}

	fmt.Println(ages["a"])
	fmt.Println(len(ages))

	var scores map[string]int // nil map 

	fmt.Println(scores)

	scores = make(map[string]int)
	scores["math"] = 32
	fmt.Println(scores)

	users := map[string]string{
		"u1":"fsdf",
		"u2":"fsdfsd",
	}

	delete(users,"u1") // delete from map 
	fmt.Println(users)

}
