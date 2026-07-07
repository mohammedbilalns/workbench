package db

import (
	"context"
	"fmt"
	"gin-crud/internal/config"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)


// connect to mongodb 
func Connect(cfg config.Config)(*mongo.Client, *mongo.Database , error){
	// prevents the app from freezing 
	ctx , cancel := context.WithTimeout(context.Background(), 10 * time.Second)
	defer cancel()

	clientOpts := options.Client().ApplyURI(cfg.MongoURI)

	client, err := mongo.Connect(ctx, clientOpts)
	if err != nil  {
		return nil , nil , fmt.Errorf("Failed to connect to mongodb")
	}

	if err := client.Ping(ctx , nil); err != nil {
		return nil , nil , fmt.Errorf("Failed to ping mongo")
	}

	database := client.Database(cfg.MongoDB)

	return client , database, nil 

}


func DisConnect(client *mongo.Client) error {
	ctx, cancel := context.WithTimeout(context.Background(), 5 *time.Second)
	defer cancel()
	return client.Disconnect(ctx)
}
