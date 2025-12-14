//NOTE: import io library from standard library that is not in prelude  
use std::cmp::Ordering;
use std::io;
use rand::Rng;

fn main(){
    println!("Guess the number!");

    // NOTE: rand::thread_rng function that gives the random number generator
    let secret_number = rand::thread_rng().gen_range(1..=100);

    println!("The secret number is: {secret_number}");

    loop{
        println!("Please input yout guess.");

        //NOTE:: variable to store the user input  
        // let is used to create a new variable
        // by default variables are immutable 
        // mut keyword is used to make an variable mutable 
        // String::new is a function that returns a new instance of a string 
        // String is a type provided by std library that is growable utf-8 encoded bit of text 
        let mut guess = String::new();

        //NOTE: call the read_line method on the statndard input handle to get the input from the user
        // read_line takes user input and in stdin and append that to the string without overriting 
        // string argument needs to be mutable so that the method can change the content
        // & indicates that the argument is reference(allows to access the data wihthout copying) 
        // read_line returns an Result enum 
        // Result's variance are Ok and Err. Ok -> Successful , Err -> failure
        // Instances of Result has an expect method that can call
        io::stdin()
            .read_line(&mut guess)
            .expect("Failed to read line");

        // NOTE: shadowing previous guess variable 
        // trim method eliminates the white spaces on beg and end 
        // parse converts from one type to another 
        // parse method also returns th Result enum 
        let guess: u32 = match guess.trim().parse(){
            Ok(num) => num,
            Err(_) => continue
        };

        println!("You guessed: {guess}");

        //NOTE: Ordering is another enum which chas less greater and equal variants
        // 
        match guess.cmp(&secret_number) {
            Ordering::Less => println!("Too small"),
            Ordering::Greater => println!("Too Big"),
            Ordering::Equal => {
                println!("You Win");
                break;
            }
        }
    }
}
