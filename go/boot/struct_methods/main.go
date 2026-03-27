package main

import "fmt"


type rect struct {
	width int 
	height int 
}

func (r rect) area() int {
	return  r.width * r.height
}

type authenticationInfo struct {
	username string 
	password string 
}

func (info authenticationInfo) getBasicAuth() string{
	return "Authorization: Basic" + info.username +":" + info.password

}

func main(){

	var r = rect{
		width: 5, 
		height: 10,
	}

	fmt.Println(r.area())

}
