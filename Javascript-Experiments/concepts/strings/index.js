
const sample = " abcdefghabcijklabcmnopqrstuvwxyz   "

/* Properties */
//console.log(sample.length) 

/* Methods */

//console.log(sample.trim()) // removes the empty space from both the ends 
// console.log(sample.trimStart()) // removes the empty spaces from start 
// console.log(sample.trimEnd()) // removes the emtpy spaces from the end 

// console.log(sample.charAt(5)) // returns the character at the provided index 
// console.log(sample.charCodeAt(5)) // returns the characted code at the provided index
// console.log(sample.at(0)) // returns the character at the provided index and it supports negative indices 
// console.log(sample.codePointAt(0)) // full unicode point 

//console.log(sample.match('abc')) ?? 

//console.log(sample.slice(0,5)) // string.slice(m,n) returns section of string from m to n-1  

//console.log(sample.split('',5)) // string.split(seperator, limit) returns array of strings seperated based on the seperator upto the limit 

//console.log(sample.startsWith("a",1)) // returns weather the string starts with the given string at the given index 
//console.log(sample.endsWith("s",sample.length-1)) // returns weather the string ends with the given string at the given index 


 
//console.log(sample.padStart(100,"Hello")) // returns the string with target length padded with the provided text 
//console.log(sample.padEnd(100k,"Hello")) // returns the string with target length padded with the provided text on the end 

// console.log(sample.toLowerCase())
// console.log(sample.toUpperCase())


// console.log(sample.indexOf('a',3)) // returns the index of the first index of given substring after given index 
// console.log(sample.lastIndexOf('a',3)) // returns the index of the last index of given substring before the given index 
//console.log(sample.search("b"))  
//console.log(sample.includes("abc",20))

// console.log(sample.repeat(10))

//console.log(sample.concat("Hello world", "Hi ")) // returns string after concatenating all the arguments 

/* const itr = sample.matchAll("abc")
for (let elem of itr){
console.log(elem)
} */ // returns the iterator of all the matched ones 

// console.log(sample.normalize())// retusn the unicode normalization form of string 



