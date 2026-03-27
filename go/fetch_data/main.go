package main

import (
	"fmt"
	"io"
	"net/http"
	"time"
)

const url = "https://api.dictionaryapi.dev/api/v2/entries/en_US/enemy"

func fetchUrl(url string) ([]byte, error) {
	client := &http.Client{
		Timeout: 10 * time.Second,
	}

	resp, err := client.Get(url)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil , fmt.Errorf("request failed with status: %s", resp.Status)
	}

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}
	return body, nil 
}
func main() {
	data, err := fetchUrl(url)
	if err != nil {
		panic(err)
	}

	fmt.Println(string(data))

}
