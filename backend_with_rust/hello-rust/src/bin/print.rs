#![allow(unused)]

#[derive(Debug)]
struct Lang{
    language: String,
    version: String
}

fn main(){
    let lang = "rust";
    println!("hello {}", lang);

    let x = 2; 
    println!("{0} x {0} = {1}",x, x*x);

    let lang = Lang {
        language: "rust".to_string(),
        version:"1.8.3".to_string()
    };

    println!("{:?}", lang);
    println!("{:#?}",lang);
}
