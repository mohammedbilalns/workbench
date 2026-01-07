package main

import "fmt"

// struct groups related diedls into one type
type User struct{
	ID int 
	Name string
	Email string
	Age int
}

func main(){

	u1 := User{
		ID: 1,
		Name: "fdsf",
		Email: "fsdfsd@fsdf.sdf",
		Age: 32,
	}
	// partial struct 
	u2 := User{
		Name:"fsdfs",
	}

	// struct fields are mutable by default 
	u1.Age = 32 

	fmt.Println(u1, u1.Email)

	fmt.Println(u2)

}

type TestRequest struct {
	Name string `json:"name"`
}
