#![allow(unused)]


fn main(){
    // scalar types 
    // - represents single value 
    // - building blocks for complex types 
    // integeres  : i32/i64
    // signed integers 
    // floats 
    // booleans 
    // characters
    
    // signed integres 
    let i0 : i8 = 0; // -2**7 -> 2**7 -1 
    let i2 : i32 = 1; 
    let i3 : i64 = 1;
    let i4 : i128  = 1;
    let i5 : isize = 1; // size based on system arch 

    // unsigned integers 
    let u0 : u8 = 1; // 0 -> 2*8 -1 
    let u1 : u16 = 1;
    let u3 : u32 = 1;
    let u4: u64 = 1;
    let u5 : u128 = 1;
    let u6 : usize = 1;

    // flots 
    let f0 : f32 = 0.01;
    let f1 : f64 = 0.04;

    // characters 
    let c : char = 'c';
    let e: char = 'e';

    // Type conversion 
    let i : i32 = 1;
    let u : u32 = i as u32; // converted i to u32 
    let x : u32 = u + (i as u32); 
    // Min and max  
    let min_i: i32 = i32::MIN;
    let max_i: i32 = i32::MAX;

    let min_char: char = char::MIN;
    let max_char : char = char::MAX;
    // overflow 
    let mut  u: u32 = u32::MAX;
    u += 1 ;  // panicks on dev mode but resets from inital in production 
    println!("overlfow: {}", u); 

    // checking_add - Some(x) | None 
    let u = u32::checked_add(u32::MAX,1);
    println!("checked add: {:?}",u); // result will be None since it overflows 

    let u = u32::wrapping_add(u32::MAX,2);
    println!("wrapping_add: {:?}", u); // result wraps from the beginning 
}
