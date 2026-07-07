use std::io;
fn main() {
    loop{
        let mut a = 0;
        let mut b = 1;
        let mut n = String::new(); 
        println!("Enter the number of Fibonacci number ");
        io::stdin().read_line(&mut n).expect("Failed to read response");
        match n.trim().parse::<i32>(){
            Ok(num) => {
                if num == 0 {
                    println!("The 0th fibonacci number is 0");
                    break
                }else if num == 1 { 
                    println!("The 1st fibonacci number is 1");
                    break
                } else {
                    for _ in 2..num {
                        let  c = a+b;
                        a=b;
                        b=c;
                    }
                }
                println!("The {n} th fibonacci number is {b}");
                break
            }, 
            Err(_) => continue
        };
    }

}
