

fn do_something_that_might_fail(i: i32) -> Result<f32,String> {
    if i==42 {
        Ok(13.0)
    }else {
        Err(String::from("this is not the right number"))
    }
}



fn main_alt() -> Result<(),String> {
   
    let result = do_something_that_might_fail(43);
    match result {
        Ok(v) => println!("found {}",v),
        Err(_e) => {
            return Err(String::from("Something wrong in main"));
        }
    }

    Ok(())

}
// graceful handling 
fn main_alt2() -> Result<(),String>{
    let v = do_something_that_might_fail(78)?;
    println!("Found {}",v);
    Ok(())

}

//ugly option /result handling 
fn main() -> Result<(),String>{

    let v = do_something_that_might_fail(42).unwrap();
    println!("founde {v}");

    let v = do_something_that_might_fail(43).unwrap();
    println!("found {v}");

    Ok(())

}
