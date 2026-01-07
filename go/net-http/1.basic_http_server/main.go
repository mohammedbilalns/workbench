package main

import (
	"fmt"
	"net/http"
)

func helloHandler(w http.ResponseWriter, r *http.Request){
	
	if r.Method != http.MethodGet {
		http.Error(w,"Only Get is allowed", http.StatusMethodNotAllowed)
		return 
	}

	_ , _ = w.Write([]byte("Hello from Go server"))

}

func main(){
	http.HandleFunc("/hello", helloHandler)

	fmt.Println("running on 8080")

	err := http.ListenAndServe(":8080",nil)

	if err != nil {
		fmt.Println(err)
	}

}
