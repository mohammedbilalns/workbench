package structsmethodsinterfaces

import "testing"

type Shape interface {
	Area() float64
}

func TestPerimeter(t *testing.T){
	rectangle := Rectangle{10.0, 10.0}
	got := Perimeter(rectangle)
	want := 40.0

	if got != want {

		t.Errorf("got %.2f want %0.2f ", got, want)
	}
}

func TestArea(t *testing.T){

	areaTests := []struct{
		shape Shape
		want float64
	}{
		{Rectangle{Width: 12, Height: 6}, 72.0},
		{Circle{ radius:  10},  314.1592653589793},
		{Triangle{ Base: 12, Height:  6}, 36.0},
	}

	for _, tt := range areaTests {
		got := tt.shape.Area()
		if got != tt.want {
			t.Errorf("got %g want %g", got, tt.want)
		}
	}

}
