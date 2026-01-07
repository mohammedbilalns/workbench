package main

import "fmt"

// we can functions with named returns
func divide(a int , b int)(c int , d int ){
	d = a + b 
	c = a * b

	return // naked return (it will return the variables with the names defined on function def) 
}

func main(){
	g,r := divide(32,4)
	fmt.Println(g,r)

}
