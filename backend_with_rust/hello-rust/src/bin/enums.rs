#![allow(unused)]

// Enum 
// - custom data we can declare to represent finite states/finite possible values 
#[derive(Debug, PartialEq)]
enum Color {
    Red,
    Green, 
    Blue,
    Rgba(u8, u8, u8, f32), // values with params 
    Hex(String),
    Hsl {h:u8, s:u8 , l:u8}
}
fn main(){
    // Enum  
    let color : Color = Color::Red;
    let color  = Color::Green;
    let color = Color::Rgba(0, 0, 255, 0.1);
    let color = Color::Hex("#ffffff".to_string());
    let color = Color::Hsl { h: 9, s: 4, l: 4 };

    println!("{:?}", color);

    // PartialEq 
    println!("{}", Color::Red == Color::Green); // for comparing enums 
    // Option 
    // - can take values -> Some() | None 
    let x : Option<i32> = None;
    let x : Option<i32> = Some(11);
    println!("option: {:?}",x);

    // Result 
    // - can take values -> Ok() | Err("")
    let res : Result<u32, String> = Ok(5);  
    let res: Result<u32, String> = Err("div by 0".to_string());


}
