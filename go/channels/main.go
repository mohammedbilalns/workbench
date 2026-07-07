package main


type Server struct {
	users map[string]string
	userch  chan string
}

func NewServer() *Server{
	return &Server{
		users: make(map[string]string),
		userch: make(chan string),
	}
}


func (s *Server) Start(){

	go s.loop()
}

func (s *Server) loop(){
	for {
		user := <- s.userch
		s.users[user] = user
	}
}


// func (s *Server) addUser(user string){
// 	s.users[user] = user
// }

func main(){

	// userch <- "Bob"
	// userch <- "Alice"
	//
	// userch <- "sdfkjewnjkrnejkwnrj"
	//
	// user := <-userch
	// user2 := <-userch
	//
	// fmt.Println(user)
	// fmt.Println(user2)
}


// Send only channel 
// func sendUser(msgchan chan<-  string){
// 	msgchan <- "hello"
//
// } 
//
// func readUser(msgchan <- chan string){
// 	name := <- msgchan
// 	fmt.Println(name)
// }

