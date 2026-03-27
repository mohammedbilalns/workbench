package main

type User struct {
	Name string
	MembershipType MemberShip
}

type MemberShip struct {
	Type string
	MessageCharLimit int
}

func newUser(name string, membershipType string) User {
	// ?
	return User{
		Name: name,
		MembershipType: MemberShip{
			Type:  membershipType,
			MessageCharLimit: 1000,
		},
	}
}

