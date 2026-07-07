package main

type Dictionary map[string]string

const (
	ErrNotFound = DictionaryErr("could not find the word you were looking for")
	ErrWordExists = DictionaryErr("cannot add word because it already exists")
	ErrWordNotExists = DictionaryErr("The provided word doesnt exists")
)

type DictionaryErr string

func (e DictionaryErr) Error() string{
	return string(e)
}


func (d Dictionary) Search(word string) (string, error){
	defenition , ok := d[word]

	if !ok {
		return "", ErrNotFound
	}

	return defenition, nil 

}

func (d Dictionary) Add(word, defentition string) error{
	_, err := d.Search(word)

	switch err {
	case ErrNotFound:
		d[word] = defentition
	case nil:
		return ErrWordExists
	default:
		return err
	}
	return nil 
}

func (d Dictionary) Update(word, newDefenition string) error {
	_, err := d.Search(word)

	switch err {
	case ErrNotFound:
		return ErrWordNotExists
	case nil:
		d[word] = newDefenition
	default:
		return err 
	}
	return nil 
}

func (d Dictionary) Delete(word string) error {
	_, err := d.Search(word)

	switch err{
	case ErrNotFound:
		return ErrWordNotExists
	case nil:
		delete(d, word)
	default:
		return err 
	}
	return nil 
}
