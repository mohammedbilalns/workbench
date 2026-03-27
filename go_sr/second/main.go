package main

import (
	"fmt"
	"math"
)

// Maps
// -- User when we wantto be the loopkup time to be O(1)
// -- It is a refrence type so the zero value will be nil
// -- it is not recommended to initialize the maps using var keyword, as it can throw errors when we try to access or modify using the keys in it

type Vertex  struct {
	Lat, Long float64
}
var n map[string]Vertex // string is the key type and the Vertex is th value type 


func main(){
	// declaring using make 
	m := make(map[string]Vertex)
	m["sdfds fsd" ] = Vertex{
		32.2323,23.323,
	}
	fmt.Println(m["sdfds fsd"])

	// Map Literal syntax 

	anotherMap := map[string]Vertex{
		"abc":{323.232,323.323,},
		"efg":{323.233,443.232},
	}
	anotherMap["abc"] =Vertex{323,2323} 
	anotherMap["fsdfdsf"] = Vertex{342,23}

	// delete a key value 
	delete(anotherMap,"abc")
	// if we try to access the key after deleting it we will get the zero value 

	// Safely access a value from the map 

	v, ok := m["abc"] // ok is a boolean that tels weather the value exists or not ( for eg: we can differentiate the zero value and the intiger zero by checkign ok )

	// iterate throgh the keys and values using range  
	for key, value := range m {
		fmt.Println(key,value)
	}

	// Difference with structs 
	//-- We cant range over hte strucuts
	//-- Every structu field has fixed memory location but map doesnt have that  
	//-- The order of the keys are randomized when we iterates over a map

}


// Anonymous functions 
func egAnonymous(){
	hypot := func(x,y float64) float64 {
		return math.Sqrt(x*x + y * y)
	}
}

// functions as parameters 
func compute(fn func(float64, float64) float64, x , y float64) float64 {
	return fn(x,y)
}

// Closures 

func adder() func (int) int {
	sum := 0 
	return func(x int ) int {
		sum += x 
		return sum 
	}
}

// Methods 
// -- allows us to assign functions to the types 
// -- the value that passes to method can be concrete value or a pointer 
// -- if it is a value reciever  then the changes wont reflect on the orignal memory space, but if it is poirnter 
// -- if it is a method of the type expects a pointer we can pass the value when calling go will automatically sends the pointer to the function ( it is not possible in normal functions)
// -- if we are mutating that should reflect the orignal memory space we can use pointer reciever 
// -- dont create a value revicer when a pointer reciver is active in the lifecycle

// method assigned to the type Vertex 
func (v Vertex) Abs() float64{
	return math.Sqrt(v.Lat * v.Lat + v.Long * v.Long)
}

// using the method with the type 

func methodEx(){
	v := Vertex{32,32}
	fmt.Println(v.Abs())
}

type MyBool bool

func (f MyBool) isBool() bool{
	return f == true
}


func (v *Vertex) Scale(f float64){
	v.Lat = v.Lat * 2 
	v.Long = v.Long * 2 
}




