
fn main() {
   // value_in_cents(Coin::Penny);   
   
}

// First 
#[derive(Debug)]
enum UsState{
    Alabama,
    Alaska,
}
enum Coin {
    Penny, 
    Nickel, 
    Dime, 
    Quarter(UsState),

}

fn value_in_cents(coin: Coin) -> u8{
    match coin{
        Coin::Penny => { println!("penny"); 1 },
        Coin::Nickel =>5, 
        Coin::Dime => 10,
        Coin::Quarter(state) => {
            println!(" State Quarter form {:?}!",state);
            25
        },

    }
}
//----------------------------------------------------------------------
 fn plus_one(x: Option<i32>) -> Option<i32>{
    match x {
        None => None, 
        Some(i) => Some(i+1),
    }
}

fn second(){
    let five = Some(5);
    let six = plus_one(five);
    let none = plus_one(None);
}
//----------------------------------------------------------------------

