package main

import "fmt"


type User struct{
	Name string
	Age int
}

func main(){
	u := User{Name: "fdsf", Age: 32}
	fmt.Println(u.Age)

	u.BirthDay()
	fmt.Println(u.Age)

}

func (u *User) BirthDay(){
	u.Age++
}
