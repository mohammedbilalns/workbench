package main

import (
	"bytes"
	"testing"
)


func TestGreet(t *testing.T){
	buffer := bytes.Buffer{}
	Greet(&buffer, "Bilal")

	got := buffer.String()
	want := "Hello Bilal"

	if got != want {
		t.Errorf("got %q want %q", got,want)
	}
}

