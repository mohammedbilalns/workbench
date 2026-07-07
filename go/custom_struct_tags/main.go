package main

import (
	"fmt"
	"reflect"
	"strings"
)

type User struct {
	Name string `validate:"min=3,max=10"`
	Email string `validate:"required,email"`
}


func validate(val interface{}) error {

	v := reflect.ValueOf(val)
	for i := 0 ; i< v.NumField(); i++ {
		field := v.Field(i) 
		tag := v.Type().Field(i).Tag.Get("validate")
		if tag == ""{
			continue
		}
		rules := strings.Split(tag, ",")
		for _ , rules := range rules {
			switch{
				case strings.HasPrefix(rule, "min="):

			}
		}
	}

	return nil 
}
func main(){

	user := User{
		Name : "Bilal",
		Email: "bilal@gmail.com",
	}

	fmt.Println(validate(user))

}
