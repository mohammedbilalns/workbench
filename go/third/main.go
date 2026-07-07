package main

import (
	"fmt"
	"go/types"
	"math"
	"os"
	"time"
)

// Interfaces
// - Defines Behaviours that should have to implment that interface
// - it is implecetely satisfied if the type implmenat all the interface methods
// - Zero value of the interface is nil
// - We can only call the interface method if it is initilized with the methods

type myFloat  float64

type Abser interface {
	Abs() float64
}


func (f myFloat) Abs() float64 {
	if f < 0 {
		return float64(f)
	}
	return float64(f)
}


type Vertex struct {
	X, Y float64
}

func (v *Vertex) Abs() float64 {
	return math.Sqrt(v.X * v.X + v.Y * v.Y)
}


func main(){
	var  a Abser 
	f := myFloat(math.Sqrt2)

	v := Vertex{3,4}

	// we can assign f or the pointer of v to a as both myFloat and the Vertext implmemats all the methods in the Abser interface 
	a = f 
	a = &v 

	a = v // Cannot assigs as the there is no value reciever matching Abs() 
}

// Empty interfaces 
// -- interface initiazlied with no methods 
// -- we can use any type adhering as it follows the empty interface 
// -- it is equavelnt to the any type 

func emptypInteface(){
	var i interface {}
	a := 32
	describe(a)

	b := "fsdfds"
	describe(b)
}

func describe(i interface{}){
	fmt.Println(i)
}

// Type Assertion 

func typeAssertion(){
	var i interface{} = "Hello"
	
	s,ok := i.(string)
	if ok == false {
		fmt.Println("Failed to parse to string")
	}
}

// Type checking 

func checkType( i interface{}){
	switch v := i.(type){
		case int:
			fmt.Println("int")
		case string: 
			fmt.Println("string")
		default: 
			fmt.Println("dont know which type it is ")
	}
}

// making a type adheres to stringer 

type Person struct{
	name string
	age int 
}

// since we implmemneted the string method we can pass down the person inside the print functions 
func (p Person) String()  {
	fmt.Sprintf("%v , %v years old", p.name, p.age)
}

// Error Interface 

type MyError struct {
	when time.Time
	what string
}

func ( e * MyError) Error() string {
	return fmt.Sprintf("at %v, %s", e.when, e.what)
}

func run() error {
	return &MyError{
		time.Now(),
		"something went wrong",
	}
}

func testError(){
	if err := run(); err != nil {
		fmt.Println(err)
	}

}


// Generics 
// - user for using types as params 

func IndexInt( s []int , x int) int {
	for i,v := range s {
		if v == x {
			return i  
		}
	}
	return -1 
}

func indexString(s []string, x string) int {
	for i,v := range s {
		if v == x {
			return i 
		}
	}
	return -1
}


// using generics 
// comparable is a type where it should work with the ==  
func Index[ T comparable](s []T, x T) int {
	for i,v := range s{
		if v == x {
			return i 
		}
	}
	return -1 
}
