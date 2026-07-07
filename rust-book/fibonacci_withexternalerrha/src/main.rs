use std::io;
fn is_number(n: &str) -> Result<u64,String>{
    match n.trim().parse::<u64>(){
        Ok(num) => Ok(num),
        Err(_) => Err(String::from("This is not a number")),
    }

}
fn main() -> Result<(),String> {
    loop{
        let mut a = 1u64;
        let mut b = 1u64;
        let mut n = String::new(); 
        println!("Enter the number of Fibonacci number ");
        io::stdin().read_line(&mut n).expect("Failed to read response");
        let n = is_number(&n)?;

        match n {
            0 => {println!("The 1st fibonacci number is 0");
                break Ok(())},
            1 => {  println!("The st fibonacci number is 1");
                break Ok(())
            }
            _ => {
                for _ in 2..=n {
                    let  c = a+b;
                    a=b;
                    b=c;
                }
                println!("The {n} th fibonacci number is {b}");
                break Ok(())
            }                 
        } 
    }

}
