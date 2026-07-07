fn main() {
    println!("Hello, world!");
}


fn outer(){

    let a = 10 
    fn inner(){
        println!('{}',a);
    }
}
