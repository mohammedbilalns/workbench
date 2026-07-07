package structsmethodsinterfaces

import "math"


type Rectangle struct {
	Width float64
	Height float64
}
type Circle struct {
	radius int
}

type Triangle struct {
	Base float64
	Height float64
}

func Perimeter(rectangle Rectangle) float64 {
	return 2 * (rectangle.Width + rectangle.Height) 
}



func (r Rectangle) Area() (area float64) {
	area = r.Width * r.Height
	return
}


func (c Circle) Area() (area float64){
	area = math.Pi * (float64(c.radius) * float64(c.radius) ) 
	return
}

func (t Triangle) Area() float64{
	return (t.Height * t.Base )/2
}
