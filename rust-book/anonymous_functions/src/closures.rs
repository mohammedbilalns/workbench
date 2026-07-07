struct  Person{
    first_name: String,
    last_name: String
}

pub fn test_closures(){
    let add = |x: u8,y: u8| { 
        println!("x: {}, y: {}",x,y);
        x+y
    };
    let result = add(45,54);

    let print_result  = |x| println!("The result is: {}",result+x);
    print_result(43);

    let mut p1 = Person{first_name: "Mohammed".to_string(), last_name: "Bilal".to_string()};
    let mut change_name = |new_last_name: &str| p1.last_name = new_last_name.to_string() ; 
    change_name("fsjld");
    change_name("fsdffsfwe");
    println!("{}",p1.last_name);
    

}
