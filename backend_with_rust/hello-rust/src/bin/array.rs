#![allow(unused)]

// array  and slices 
// array -  fixed length , known at compile time 
// slice - length not known at compile time 

fn main(){
    let arr : [u32; 3]= [1,2,3];
    // accessing 
    println!("arr[2]: {}", arr[2]);

    // mutating values 
    let mut arr: [u32; 3] = [1,2,3];
    arr[1]  = 43;

    // array with same elements in a better way 
    let arr : [u32; 10] = [0;10]; 

    // slices 
    let mut nums  = [1,2,3,4,5,6,7,8];

    let s = &nums[0..3];  // slice from 0 - 2 , & -> referencing
    // we can opt out the zero at the beginning [..3]

    let s = &nums[3..7];
    let s = &nums[7..]; // slice until last element 
    // slice with all the elements 
    let s = &nums[..];
    


}
