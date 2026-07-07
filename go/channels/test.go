package main

import (
	"fmt"
	"testing"
)

func TestAddUser(t *testing.T) {
	server := NewServer()

	for i:=range 10 {
		go func(i int ){

			server.userch  <- fmt.Sprintf("user_%d",i)
		}(i)
	}
}

