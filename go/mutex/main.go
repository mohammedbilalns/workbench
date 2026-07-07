package main

import (
	"fmt"
	"math/rand"
	"sync"
	"time"
)

type Player struct {
	mu sync.RWMutex // read write mutex 
	health int 
} 

func NewPlayer() *Player{
	return &Player{
		health: 100,
	}
}

func (p *Player) getHealth() int{
	p.mu.RLock()
	defer p.mu.RUnlock()
	return p.health
} 

func (p *Player) takeDamage(value int){
	p.mu.Lock()
	defer p.mu.Unlock()
	p.health -= value
}

func startUILoop(p *Player){
	ticker := time.NewTicker(time.Second)

	for {
		fmt.Printf("PLayer health: %d\r", p.getHealth())
		<- ticker.C
	}
}

func startGameLoop(p *Player){
	ticker := time.NewTicker(time.Millisecond * 300)

	for {
		damage := rand.Intn(40)
		p.takeDamage(damage)
		if p.getHealth() <= 0 {
			fmt.Println("Game Over")
			break
		}
		<- ticker.C
	}
}

func main(){
	Player := NewPlayer()
	go startUILoop(Player)
	startGameLoop(Player)
}
