fn main() {
  iterating_overstring() 
}

fn string_slices(){
    let a = "hi  fsdf fsd fd fd";
    println!("{}",a.len());
    let first_word = &a[0..2];
    let second_word =&a[3..7];
    println!("{}",a.is_empty());

    println!("{},{}",first_word,second_word);
}
fn string_literals () {
    let a ="hi";
    let b: &'static str = "hi";
    println!("\0");
}

fn merging_together(){
    let s1 = String::from("Hello, ");
    let s2 = String::from("world!");
    let s3 = s1 + &s2; // s3 takes ownership of s1 and adds the value of s2 to s1 and return the
    // ownerhsip of s1 to s3 

}
fn format_macro(){
    let s1 = String::from("tic");
    let s2 = String::from("tac");
    let s3 = String::from("toe");

    let s = format!("{s1}-{s2}-{s3}"); // retruns String with contents  and it uses references so
    // that this call doesn't take ownership of any of its parameteres 


}

fn indexing_andslicing(){
    let s1 = String::from("hello");
    let s = &s1[0..2]; // prints h only since each letter is two bytes 
    println!("s");
    //let h = s1[0]; this is not possible since it is utf8 encoding 

}

fn iterating_overstring(){
    for c in "Зд".chars() { // similaryly .bytes() prints the bytes in this number 
    println!("{c}");
}

   
}
