#![allow(dead_code)]

#[derive(Debug)]


//-----------------------------------------------------------------------
enum Species {
    Crab,
    Octopus,
    Fish, 
    Clam
}

struct SeaCreature {
    species: Species,
    name: String,
    arms: i32,
    legs: i32,
    weapon: String,
}

fn first_ex(){
 let ferris = SeaCreature {
        species:Species::Crab,
        name: String::from("Ferris"),
        arms: 2,
        legs: 4,
        weapon: String::from("claw"),
    };

    match ferris.species {
        Species::Crab => println!("{} is a crab",ferris.name),
        Species::Octopus => println!("{} is a octopus",ferris.name),
        Species::Fish => println!("{} is a fish",ferris.name),
        Species::Clam => println!("{} is a clam",ferris.name),
    }

}
fn main() {
    //let b = test_option_type();
    //println!("{}",b.unwrap());
}
//-----------------------------------------------------------------------
enum IpAddrKInd {
    V4,
    V6,
}
struct  IpAddr {
    kind: IpAddrKInd,
    address: String,
}
fn second(){
    
    let home = IpAddr{
        kind : IpAddrKInd::V4,
        address: String::from("127.0.0.1"),
    };
    let loopback = IpAddr {
        kind: IpAddrKInd::V6,
        address: String::from("::1"),
    };

}
//-----------------------------------------------------------------------
// enum with parametere
enum IpAddr2 {
    V4(String),
    V6(String),
}
fn seco_nd(){
    let home = IpAddr2::V4(String::from("127.0.0.1"));
    let loopback = IpAddr2::V6(String::from("::1"));

}
//-------------------------------------------------------------------------
// Multiple parameters 
enum IpAddr3 {
    V4(u8,u8,u8,u8),
    V6(String),
}

fn third(){
    let home = IpAddr3::V4(127, 0, 0, 1);
    let loopback = IpAddr3::V6(String::from("::1"));
}
// ----------------------------------------------------------------------
// Enum with struct as parameter 
struct Ipv4Addr2 {

}
struct Ipv6Addr2 {

}
enum IpAddr4{
    V4(Ipv4Addr2),
    V6(Ipv6Addr2),
}
//-----------------------------------------------------------------------
// different types and methods 
enum Message {
    Quit, // no data 
    Move {x:i32, y: i32}, // named field like structs 
    Write(String), // contains string 
    ChangeColor(i32,i32,i32) // 3 i32 values 
}

impl Message {
    fn call(&self){
        //method defined here 
    }
}

fn fourth(){
    let m = Message::Write(String::from("hello"));
    m.call();
}
//------------------------------------------------------------------------
// Option enum 

 fn fifth(){
    let some_number = Some(5);
    let some_char = Some('e');

    let absent_number: Option<i32> = None;
}
//-----------------------------------------------------------------------
fn test_option_type() -> Option<u8> {
    let mut opt1: Option<u8> = None;
    opt1 = Some(10);
    return opt1;


}
