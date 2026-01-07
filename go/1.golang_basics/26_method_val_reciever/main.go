package main

import "fmt"

type User struct{
	Name string
	Age int
}

func main(){

	u := User{Name: "fsdfsd", Age: 32}
	fmt.Println(u.Intro())

}


// val reciever means this method recieves a copy of the user 
func (u User) Intro() string {

	return fmt.Sprintf(`Hi, i am %s`, u.Name)

} 
