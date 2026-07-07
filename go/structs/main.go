package main 

import "fmt"
type Address struct {
	Name string 
	Phone int 
}

func main(){

	myAddress := &Address{
		Name: "fsdlkjfsd",
		Phone: 23423423,
		

	}

	changePhone(myAddress)
	fmt.Println(myAddress.Phone)

}

func changePhone(s *Address) {
	s = &Address{"fsdfsdf",234343}
}
