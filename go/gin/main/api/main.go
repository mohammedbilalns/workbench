package main

import (
	"fmt"
	"gin-crud/internal/config"
	"gin-crud/internal/db"
	"gin-crud/internal/server"
	"log"
)


func main(){
	cfg, err := config.Load()
	if err != nil {
		log.Fatal("Failed to load config")
	}

	client ,database, err := db.Connect(cfg)
	if err != nil {
		log.Fatalf("db error")
	}

	defer func (){
		if err := db.DisConnect(client); err != nil {
			log.Printf("mongo disconnect error: %v", err)
		}

	}()

	router := server.NewRouter(database)

	addr := fmt.Sprintf(":%s", cfg.ServerPort)

	if err := router.Run(addr) ; err != nil {
		log.Fatalf("Server failed")
	}
}
