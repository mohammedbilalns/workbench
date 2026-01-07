#![allow(unused)]

// groups multiple valus 
// --tuple
// -- array 

fn main(){
    //Tuple 
    let t : (bool, u32, char) = (true, 1, 'c');
    //Destructure 
    let (a,b,c) = t; 
    //ignore with _  
    let (_,d,_) = t;
    //Empty tple - unit type 
    let t = (); // it is also called unit type (like void on other languages) 
    //Nested tuple 
    let mut  nested = ((1.23, 'a'), (true, 1u32, 'b'));

    let t : (bool, u32, char) = (true, 1, 'c');
    // accessing by index 
    println!("t = {}, {}, {}", t.0, t.1, t.2);
    println!("nested {}", nested.0.1);

    nested.1.1 = 32;
    println!("nested {}" , nested.1.1)
}
