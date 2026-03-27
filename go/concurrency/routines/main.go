package main

import (
	"fmt"
	"time"
)

func say(s string) {

	for i := range 5  {
		time.Sleep(100 * time.Millisecond)
		fmt.Println(i)
		fmt.Println(s)
	}
}
func main() {
	go say("World")
	say("Hello")

}
// - routines are scheduled by the go runtime's M:N scheduler( M goroutines to N OS threads).
// - when goroutine hits a blocking operation like network i/o or a channel recieve, the scheduler parks it without blockinng the main underlying os thread, using mechanisms like netpoller( epoll/ kqueue on linux/macos) to monitor the readiness 
// - ready goroutines then resume on available threads, enabling hight throughput even with thousands of concurrent calls 

