#! /bin/bash

shopt -s globstar nullglob 

echo "Finding Files"
find . -name '*cache'

files=(./**/*cache) 
len=${#files[@]}

echo "Found $len files"

for file in "${files[@]}"; do
	echo "Processing $file"
	sleep 0.5
done


