package main

func (e email) cost() int {
	// ?
	if !e.isSubscribed {
		return 5 * len(e.body) 
	}
	return  2 * len(e.body)
	
}

func (e email) format() string {
	// ?

	formatted := "'CONTENT |"

	if e.isSubscribed {
		formatted += "Subscribed"
	}else{
		formatted += "Not Subscribed"
	}
	return formatted
}

type expense interface {
	cost() int
}

type formatter interface {
	format() string
}

type email struct {
	isSubscribed bool
	body         string
}

