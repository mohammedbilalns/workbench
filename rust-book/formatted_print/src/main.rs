fn main() {
    precision()

}
#[allow(dead_code)]
fn format_macro(){

    let name = "alice";
    let age = 30;
    let formatted = format!("Name: {}, age: {}",name,age);
    println!("{formatted}");
}
#[allow(dead_code)]
fn print_macro(){
    // no new line as in println!
    let x = 5;
    print!("The value is: {}", x);
    print!(" and that's it.");
}
#[allow(dead_code)]

fn eprint_macro(){
    // For printing macro 
    let error_code = 404;
    eprint!("Error {}: ", error_code);
    eprintln!("Page not found");
}
#[allow(dead_code)]

fn postional_arguments(){
    println!("{0}, this is {1}. {1}, this is {0}", "Alice", "Bob");

}
#[allow(dead_code)]

fn named_arguments(){
    println!("{subject} {verb} {object}",
        object="the lazy dog",
        subject="the quick brown fox",
        verb="jumps over");
}
#[allow(dead_code)]

fn different_format(){
    println!("Base 10:               {}",   69420); // 69420
    println!("Base 2 (binary):       {:b}", 69420); // 10000111100101100
    println!("Base 8 (octal):        {:o}", 69420); // 207454
    println!("Base 16 (hexadecimal): {:x}", 69420);

}
#[allow(dead_code)]

fn right_justify(){
    // output "    1". (Four white spaces and a "1", for a total width of 5.)
    println!("{number:>5}", number=1);
}
#[allow(dead_code)]

fn padding_withzeroes(){
    // You can pad numbers with extra zeroes,
    println!("{number:0>5}", number=1); // 00001
    // and left-adjust by flipping the sign. This will output "10000".
    println!("{number:0<5}", number=1); // 10000
    // You can use named arguments in the format specifier by appending a `$`.
    println!("{number:0>width$}", number=1, width=5);

}
 #[allow(dead_code)]

fn from_sorroundings(){
        // For Rust 1.58 and above, you can directly capture the argument from a
    // surrounding variable. Just like the above, this will output
    // "    1", 4 white spaces and a "1".
    let number: f64 = 1.0;
    let width: usize = 5;
    println!("{number:>width$}");
}
    #[allow(dead_code)] // disable `dead_code` which warn against unused module
fn precision(){

    let  pi = 3.14592;
    println!("{:.3}",pi);
   

} 




