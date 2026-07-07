use std::io;
fn main() {
    test_if() 
}

fn test_if(){
    let age_todrive: u8 = 16;
    println!("Enter the person's age");
    let mut age = String::new();
    io::stdin().read_line(&mut age).unwrap();
    let age = age.replace("\n","").parse::<u8>().unwrap();
    if age  >= age_todrive {
        println!("You can drive");
    }else {
        println!("You can't drive");
    }
}
