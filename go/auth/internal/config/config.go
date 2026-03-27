package config

import (
	"fmt"
	"os"
	"strings"

	"github.com/joho/godotenv"
)

type Config struct {
	MongoURI string
	MongoDBName string
	JWTSecret string
}

func Load() (Config, error) {
	_ = godotenv.Load()

	cfg := Config{
		MongoURI: strings.TrimSpace(os.Getenv("MONGO_URI")),
		MongoDBName: strings.TrimSpace(os.Getenv("MONGO_DB_NAME")),
		JWTSecret: strings.TrimSpace(os.Getenv("JWT_SECRET")),
	}

	if cfg.MongoURI == "" {
		return Config{}, fmt.Errorf("missing MONGO_URI")
	}

	if cfg.MongoDBName == "" {
		return Config{}, fmt.Errorf("missing MONGO_DB_NAME")
	}

	if cfg.JWTSecret == "" {
		return Config{}, fmt.Errorf("missing JWT_SECRET")
	}

	return cfg, nil

}

