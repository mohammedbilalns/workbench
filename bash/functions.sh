#!/usr/bin/env bash 

greet(){
  local name = $1  # local is for declaring the scope of the variable to be local to the function
  echo "Hello $name"
  return 0 
}

for name in "$@"; do
  greet $name
done 
