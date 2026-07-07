use std::io; 

fn main() {
    loop{
        let mut response = String::new();
        let mut value = String::new();

        println!("If you want to convert Farenheit to Degree press 1 , For Degree to Farenheit press 2 ");
        io::stdin().read_line(&mut response).expect("Failed to read line");

        println!("Enter the value to convert :");
        io::stdin().read_line(&mut value).expect("failed to read line");

        let value: u32 = match value.trim().parse(){
            Ok(num) => num,
            Err(_) => continue
        };

        match response.trim().parse::<i32>(){
            Ok(num) => {
                if num == 1  {
                    farenheit_todegree(value);
                    break;
                }else if num == 2{
                    degree_tofarenheit(value);
                    break;
                }
                else {
                    println!("Error: Please Enter 1 or two ");
                    continue;
                }            },
            Err(_) => {
                println!("Failed to parse the response: Please enter  1 or two  ");
                continue;
            },
        }; 
    }

}

fn degree_tofarenheit(num: u32){
    let result = (num as f64 *1.8) + 32.0;
    println!("{num} degree is {result} fareheit");

}
fn farenheit_todegree(num: u32){
    let result = (num as f64 -32.0)/1.8;
    println!("{num} Farenheit is {result} degree ");


}
