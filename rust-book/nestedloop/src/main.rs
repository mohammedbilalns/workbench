fn main() {

   for i in 1..=5 {
        for _ in 0..(5 - i) {
            print!(" ");
        }
        for _ in 0..i {
            print!("{} ", i);
        }
        println!();
    } 
}


