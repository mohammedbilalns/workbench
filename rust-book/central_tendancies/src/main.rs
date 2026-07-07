use core::num;
use std::collections::HashMap;
use std::io;

fn mean(nums: &Vec<f32>) -> f32 {
    let mut sum: f32 = 0 as f32;
    for i in nums {
        sum += i
    }
    sum as f32 / nums.len() as f32
}

fn median(nums: &mut Vec<f32>) -> f32 {
    let mut sorted_nums = nums.clone(); // Clone the vector
    sorted_nums.sort_by(|a, b| a.partial_cmp(b).unwrap()); // Sort the vector

    match sorted_nums.len() % 2 {
        0 => (sorted_nums[sorted_nums.len() / 2 - 1] + sorted_nums[sorted_nums.len() / 2]) / 2.0,
        _ => sorted_nums[sorted_nums.len() / 2],
    } // returns median after checking weather the length is odd or even 
}

fn mode(){
}
fn main() {
    println!("Enter the numbers ");
    let mut input: String = String::new();
    io::stdin()
        .read_line(&mut input)
        .expect("failed to read response"); // Reads the input

    let mut numbers: Vec<f32> = input
        .split_whitespace()
        .filter_map(|s| s.parse().ok())
        .collect(); // parse into vector of floats

    println!("Mean of {:?} is {}", numbers, mean(&numbers));
    println!("Median is {}", median(&mut numbers));
}
