package main

import (
	"fmt"
	"html/template"
	"net/http"
	"strconv"
)


func (app * application) home(w http.ResponseWriter, r *http.Request){
	w.Header().Add("Server", "Go")

	// initilize slice containing file paths 
	files := []string{
		"./ui/html/base.tmpl",
		"./ui/html/partials/nav.tmpl",
		"./ui/html/pages/home.tmpl",
	}
	// read the template file to t a template set 
	ts,err := template.ParseFiles(files...)
	if err != nil {
		app.serverError(w,r,err)
		return 
	}
	// write the template content as the response body
	err = ts.ExecuteTemplate(w, "base", nil)
	if err != nil {
		app.serverError(w,r,err)
	}
}

func (app *application) snippetView(w http.ResponseWriter, r *http.Request){
	id, err := strconv.Atoi(r.PathValue("id"))
	if err != nil || id < 1 {
		http.NotFound(w,r)
		return 
	}

	fmt.Fprintf(w, "Display a specific snippet with Id %d...", id)
}

func (app *application) snippetCreate(w http.ResponseWriter, r *http.Request){
	w.Write([]byte("Display ha form for creating a new snippet..."))
}

func (app *application) snippetCreatePost(w http.ResponseWriter, r *http.Request){
	w.WriteHeader(http.StatusCreated)
	w.Write([]byte("Save a new snippet"))
}

