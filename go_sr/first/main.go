package main

import (
	"fmt"
)

// all variables will be initialized with their zero values
var c, ptthon , jav bool 

const PI = 3  
func add(a int, b int) int {
	return a + b
}

// mutliple returns
func swap(a int, b int) (int, int) {
	return b, a
}

// named returns
func returnSomething(a int, b int) (x, y int) {
	x = a
	y = b
	return
}

func main() {
	fmt.Println("hi")
	sum := add(231, 32)
	fmt.Println("sum is ", sum)
	a, b := swap(10, 21)
	fmt.Println(a, b)
}


// Basic Data types 
// number - int8 int16 int32 int64 int(choooses based on the system arch), 
// uint - uint8 uint16 uint32 uint64
// flot =- 
// string
//boolean 
// Aggregate data types
// - Struct - collection of heterogenous values 
// Reference data types - references another data type   
// - Pointers, slices, functions , channels , maps  
// Interfaces 

// Type Conversion
// - ther is no implicit type conversion we should explicitely convert the type 
// - There is type inference in go the variable declared using the walrus operator will automatically infer the type 

// Constants 
// - consntants should be initialized , we cannot declare without initizing it  

// Loops 
// - go only have one loop the for loop 
 
func loop(){
	sum := 0 
	for i:= 0 ; i< 10 ; i++ {
		sum += i 
	}
}

func whileWithFor(){
	sum := 1
	for sum < 100 {
		sum += sum 
	}

	fmt.Println(sum)
}

// Conditional
// we can initilize values for a condtion that will not be availbale outside the condition 

// Defer  
// deferred expressions will be added to  a stack until the funtions completes its execution then it will be run 

func deferEx(){
	defer fmt.Println("World")

	fmt.Println("Hello")
}

// References 

func refrenceExample(){
	i, j := 42, 32323
	p := &i 
	*p = 32

	p = &j 
	*p = *p /32
}

// Struct 

type Vertex struct {
	X int 
	Y int 
}

func useVertex(){
	v := Vertex{1,4}
	u := Vertex{X:1}
	v3 := Vertex{}
	v4 := &Vertex{1,2}
	v.X = 2
	v.Y = 32
	p := &v 
	p.X = 1e9
	fmt.Println(Vertex{1,2})
}
// Array 
// -- We cannot resize the array 
// -- zero values of the array is array with the length containting all zeroes 
func arrayEx(){
	var a[2] string
	a[0] = "Hello"
	a [1] = "world1"
	fmt.Println(a[1])
	primes :=[6]int{2,3,5,7,11}
	var s []int = primes[1:4] // slice 

}

// Slices
// -- it is a reference type , it refers some array (usually used as a dynamic array in go ) 
// -- it has three parts, length , capacity and the pointer to the first element 
// - capacity the length of the array which the slice is poinig to 
// - we can create slice from an exisiting slice 
// - for  a zero values slice the length and capacity will be zero and the value of that slice will be nil 
// - capacity of the slice will be the remaning capacity fo the backing slice/ array from the slice initialization 
func slicesEx(){

	names := [4]string{
		"john",
		"paul",
		"fsdfd",
	}
	a := names[0:2]
	b := names[1:3]
	b[0] = "fsdfs" // it changes the actual array names 
	fmt.Println(b)
	fmt.Println(names)

	// slice of structs 
	s := []struct {
		i int 
		b bool 
	}{
		{2, true},
		{3,false},
		{5,true},
	}

	c := names[:3] // slice containg pointers to 0 to 2 indexes 
	// make is function in go to initialize reference types( channels , maps ,slices) 
	// -- we can use make if we know the max capacity / the size of the slice before hand
	// -- it is more efficient in that case if size is known then go can skip calcualting weather the size exceeds and all 

	r := make([]int, 5) // slice with length 5 
	p := make([]int,5,10) // slice with length 5 and capacity 10 
}

// Two dimensional slices 
// -- Slices can contain another slice inside it 

func twoDimesionalSlices(){
	board := [][]string{
		[]string{"a","b","c","d"},
		[]string{"e","f","g"},
	}
}

// Append the slice 
// -- It is a variadic function 
// -- first argument must be a slice and it can take any furtehre arguemnts and t
// -- if a append a single element and if it is exceeding the current capacity go will create a memory location with double the size of the initial slice until the size becomes 256 , after 256 ther array will be grown 1.25x (if it exceeds the capacity ) 
func appendSlice(){
	var s []int
	 s = append(s,1)
}


// Loop using range 

func loopRange(){

	var pow  = []int{1,4,9,16}

	// here i is the index and the v is the copy of the valuue( not the reference )
	for i,v := range pow {
		fmt.Println(i, v)
	}
}

