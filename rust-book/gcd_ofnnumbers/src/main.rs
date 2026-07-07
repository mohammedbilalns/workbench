use std::io;

fn gcd(nums: &Vec<usize>) -> usize {
    match nums.len() {
        0 => panic!("Cannot compute GCD of empty number"),
        1 => nums[0],
        _ => {
            let a = nums[0];
            let b = gcd(&nums[1..].to_vec());
            gcd_of_two_numbers(a, b)
        }
    }
}
fn gcd_of_two_numbers(a: usize, b: usize) -> usize {
    match b {
        0 => a,
        _ => gcd_of_two_numbers(b, a % b),
    }
}  

fn main() {
    println!(" Enter the numbers ");
    let mut input: String = Default::default();
    io::stdin()
        .read_line(&mut input)
        .expect("failed to read response"); // read the response 

    let numbers: Vec<usize> = input
        .split_whitespace()
        .filter_map(|s| s.parse().ok())
        .collect(); //parse the response into  a vector 

    let c = gcd(&numbers);
     
    println!("gcd of {:?} is {c}",numbers);
    

}

