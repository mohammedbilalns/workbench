#![allow(unused)]

// String and &str 
// String -> Vectro of u8 and it must be a valid UTF-8
// &str -> slice of u8 and the it must be a valid utf-8 
// &str is used for read only 
// String is used when data need to be owned / mutated 
fn main(){

    let msg : String = String::from("Hello Rust");
    let len : usize = msg.len(); // length of the string 

    // &str 
    // - usually used with reference(borrowed)
    // - immutable 

    let msg : String = String::from("Hello Rust");
    let s: &str = &msg[0..5];
    let len: usize = s.len(); // length of the reference slice   
    println!("string slice: {s}, length : {len}");

    // String Literal 
    // - stored inside binary 
    // - slice pointing to a specific part of the binary 
    // - immutable becuase hard coded inside binary 
    let hello : &str = "Hello world";
    let s: &str = r#"
    {"a":"1", 
     "b":"32"
    }

    "#; // mutliline string literal 

    // Deref coercion 
    let msg : String = String::from("Hello Rust");
    let s: &str = &msg;

    // Add %str to String 
    let mut msg: String = "Helo Rust".to_string(); // another way to create String from literal
    msg += "!";
    
    // String interpolation 
    let lang = "Rust";
    let another = "fdsfdf";
    let msg = format!("Hello {lang} {}", another);



}
