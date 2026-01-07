package main

import "fmt"


func main(){

	//make([]T, len, capacity) 
	scores := make([]int,1,5)

	scores[0] = 32
	fmt.Println(scores, len(scores), cap(scores))

	scores = append(scores, 32)
	scores = append(scores,32)
	scores = append(scores, 43)
	scores = append(scores,43)
	// if in case we are exceeding the capacity , go grows the backing array
	// for slices below certain size (around 1024 elemnts) the capacity typically doubles 
	// for large slices the growth rate is reduced. (like 1.24x ) to prevent allocation of excessively large block that might go unused 
	scores = append(scores,43)

	fmt.Println(scores,len(scores), cap(scores))

	todos := []string{"hfsdfs", "dsfsdf"}

	more := []string{"fsdfdsf"}

	todos = append(todos,more...) // merge slices 
	fmt.Println(todos)
}
