package config

import (
	"fmt"
	"os"
	"github.com/joho/godotenv"
)

type Config struct {
	MongoURI string
	MongoDB string
	ServerPort string
}


// load env variables 
func Load()(Config, error){

	// godotenv.load reads .env and sets them to the process env 
	if err:= godotenv.Load(); err != nil {
		return Config{}, fmt.Errorf("Failed to load .env")
	} 

	mongoURI, err :=  extractEnv("MONGO_URI")
	if err != nil {
		return Config{}, err
	}

	mongoDb , err := extractEnv("MONGO_DB_NAME")
	if err != nil {
		return Config{}, err
	}

	port , err := extractEnv("PORT")
	if err != nil {
		return Config{}, err 
	}

	return Config{
		MongoURI: mongoURI,
		MongoDB: mongoDb,
		ServerPort: port,
	}, nil 
}

// extract each  env from the process env 
func extractEnv(key string) (string, error){

	val := os.Getenv(key)

	if val == ""{
		return "", fmt.Errorf("missing required env ")
	}

	return  val, nil 
}
