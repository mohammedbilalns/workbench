- channel can be buffered or un buffered 
- buffer channel will be blocked if the buffer is full  until someone is reading from it  
- unbuffered channel will only push to it if there is an active reciver for it(it will not store i think  ) 
- declaring send only channels 
```go
func sendUser(msgchan chan<-  string){
    msgchan <- "hello"

} 
```
- declaring read only channel 
```go

func readUser(msgchan <- chan string){
	name := <- msgchan
	fmt.Println(name)
}
```
