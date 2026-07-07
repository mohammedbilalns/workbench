use rand::Rng; //imnport range trait from rand crate
use std::cmp::Ordering;
use std::io; // imports io(input output library into scope ) from the std(standard) library // import cmp from std to compare two values

fn main() {
    println!("Guess the number!");

    let secret_number = rand::thread_rng().gen_range(1..=100); //first function gives us the particular random number generator we use , one that is local to th ecurrent thread of execution and is seeded by the OS
                                                               // gen_range is a method in Rng which takes a range as argument and generates random number in the range
    loop {
        println!("Please input your guess.");

        let mut guess = String::new(); // Assigning new instance of string(empty) to the mutable variable guess

        io::stdin() // calls stdin fucntion from io
            .read_line(&mut guess) // readline method in statndard input to get input from the user and stores in the variable guess
            .expect("Failed to read line");

        let guess: u32 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => continue,
        };

        //trim removes whitespaces at the beginning and end
        //parse converts into another type here we used i32
        //expect is used to handle the error when mistyped as non integer
        println!("You guessed: {guess}");

        match guess.cmp(&secret_number) {
            Ordering::Less => println!("Too small!"),
            Ordering::Greater => println!("Too big!"),
            Ordering::Equal => {
                println!("You win");
                break;
            }
        }
    }
}
