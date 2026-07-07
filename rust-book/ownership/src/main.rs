fn main() {

   mutl_mutreferencesmutstr() 
    
}

fn multiple_ownership(){

    let foo = 42;
    let  f = &foo; // pointer that points to foo , grabs ownership and read permissions from foo
     //foo +=2;  error! since f is immutable and f is borrowed by f 
    // f += 2;  error! since f is a pointer 
     //*f += 2 ; error! since reference f is immutable 
    let mut  bar = *f;// New memmory with the value of foo
    //*f =65;   // error; since reference f is immutable 
    println!("{foo}"); 
    println!("{f}"); // Prints the new value of foo 
    println!("{bar}"); // no change since data is copied from foo 
    bar = 54; //
    println!("{f}"); // prints the value of reference f  
    // f is dropped here 
    println!("{bar}");// prints the modified value of bar 
    println!("{foo}");// prints the value of f 

}

//-----------------------------------------------------------//
//simple copying and moving in a single scope 
fn printing_num(){
    let num1 = 32; // allocates num1 in stack 
    let num3 = num1; // copies value of num1 in num3 in stack 
    println!("{num1}"); // access the value in num1 
    println!("{num3}"); // access the value in num3 

}
fn printing_str(){
    let str1= String::from("dsfdfsdfds"); // Creates String object on the heap and str1 owns it 
    let str2 = str1; // move operation happens ownership of the heap allocated string is transferred from str1 to str2 , after this str1 is not valid 
  //  println!("{str1}"); Error since str1 is not pointing anywhere 
    println!("{str2}");
    //println!("{str1}"); Error since str2 still owns the data 
}
//-----------------------------------------------------------------//
//passing variable into functions 
fn transfer_fnint(){
    let x: u8 = 54; // x with value 54 in stack stores 
    process_integer(x); // value of x is copied and passed onto the fucntion 
    println!("The value is {x}"); // value of x is still there so prints fine 

}
fn process_integer(y:u8){ // recieves a copy of a x and stores in y 
    println!("The value is {y}"); // prints the copies value of x in y 
}

fn transfer_fnstr(){
    let x: String = String::from("flsjdfksd"); // Creates a string object on the heap , x owns this heap allocated string 
    process_string(x); // move operation , ownership of the string is transferred from x to the
    // parameter of the function , after this x is not valid 
    // println!("The value is {x}"); ERror since x owns no data 
}
fn process_string(y: String){ //y  takes the ownership of the string passed on now y owns the
    //string 
    println!("The value is {y}",); // prints the value of the string owned by y 
}
//--------------------------------------------------------------------//
// Another example 
fn together(){
    let s1 = String::from("hello"); // heap allocated string owned by s1
    let len = calculate_length(s1); // string in s1 moves to the argument 
   // println!("The length of {} is {}",s1,len); Error since there is no value in s1 
}

fn calculate_length(s: String) -> usize { // s will be the owner of the string previously owned by
    // s1 
    s.len() // string drops here 
}
// Fixing method 1  with one extra memmory allocation 
fn together2(){
    let s1 = String::from("hello");
    let len = calculate_length2(s1.clone());
    println!("The length of {} is {}",s1,len);
}
fn calculate_length2(s: String) ->usize{
    s.len()
}

// Fixing method 2 with tuple  no extra memmory  expensive method 
fn together3(){
    let s1 = String::from("Hello");
    let (s1,len) = calculate_length3(s1);
    println!("The value of {} is {}",s1,len);
}
fn calculate_length3(s: String) -> (usize, String){
    (s.len(),s)
}
// Fixing method 3 referencing   best one 
fn together4(){
    let  s1 = String::from("hello");
    let len = calculate_length4(&s1); // create a reference of s1 and passes as argument  s1 still
    // ownes the String 
    println!("The value of {} is {}",s1,len);
   
}
fn calculate_length4(s: &String) -> usize {
    s.len()
}

//--------------------------------------------------------------------//
// Mutating with reference 
fn mutate_string(){
    let s1 = String::from("hello");
    append_string(&s1)


}
fn append_string(y: &String){
   // y.push_str(" world") // error since it is immutable reference 
}

// Fix 1 
fn mutate_string2(){
    let mut s1 = String::from("hello");
    append_string(&mut s1);
    println!("{s1}");


}
fn append_string2(y: &mut String){
    y.push_str(" world") // error since it is immutable reference 
}
//------------------------------------------------------------------//
// Multiple references 
fn mult_immutreferencesimmutstr() {
    let s1 = String::from("Hello");
    let r1 = &s1; // immutabel reference of immutable string  1 
    let r2 = &s1; // immutable reference 2 
    println!("{},{}",r1,r2); // prints fine 
}

fn mult_immutreferencesmutstr(){
    let mut s1 = String::from("Helo");
    let r1 = &s1; 
    let r2 = &s1;
    println!("{},{}",r1,r2);

}
fn mutl_mutreferencesmutstr(){
    let mut s1 = String::from("Hello");
    let  r1 = &mut s1; //mutable reference of s1 
    r1.push_str(" world");
    println!("{r1}"); // r1 ends here 
    let  r2 = &mut s1; // another mutable reference of s1 possible since other one is ended 
    r2.push_str(" world");
    println!("{r2}"); // r2 ends here 

}
fn mutl_mutreferencemutstr(){
    let mut s1 = String::from("hello");
    let r1 = &mut s1; // mutable reference of s1  
    //let r2 =  s1; Error since already a mutable reference is active and its lifetime is not ended 
    //let r3 = &mut s1 ; Error since already a mutable refernce is active and its lifetime is not ended 
    println!("{r1}");
    println!("lksjdfdj");
}
