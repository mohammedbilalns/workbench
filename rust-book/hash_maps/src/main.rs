use std::collections::HashMap;

fn main() {

    example()
}

fn hash_ex(){

    let mut scores = HashMap::new();

    scores.insert(String::from("Blue"), 10);
    scores.insert(String::from("Yellow"), 50);

    let team_name = String::from("Blue");
    let score = scores.get(&team_name).copied().unwrap_or(0); // get method returns Option<&V>  
    // copied will get Option<i32> instead of Option<&i32> 
    // unwrap_or set score to zero if scores doesnt have an entry for the key else unwraps the value
    
    for (key,value) in &scores {
        println!("{key}: {value}");

    } // displays the key values in it 
    
    scores.insert(String::from("Blue"),20); // Overwrites the old value in Blue with 20 
    scores.entry(String::from("Blue")).or_insert(50); // there is already value in Blue so no
    // insertion happes or_insert return mutable reference to the value for the corresponding entry
    // key if that key exists, and if not insert the parameter as the new value for this key and
    // returns a mutable reference to the new value 
    scores.entry(String::from("Red")).or_insert(53); // there is no value named Red so new key is
    // allocated and maps 53 into it 

    println!("{:?}",scores);

}

fn ownership_ex(){
    let field_name = String::from( "Favourite color");
    let field_value = String::from("Blue");
    let a = 455;

    let mut map = HashMap::new();
    map.insert(&field_name,&field_value); //assingning without borrowing 
    for (key, value) in &map {
        println!("{key}: {value}");
    }
}

fn updating_valuebasedonoldvalue(){
    let text = "hello world wonderful world";
    let mut map = HashMap::new();

    for word in text.split_whitespace(){ // iterates over words in text 
        let count = map.entry(word).or_insert(0); // if value  exists then or_insert will does
        // nothing and returns reference to  the existng value and it is assigned to count if not exists then it assigns 0 to the value and retruns 0 
        *count +=1; 

    }
    println!("{:?}",map);
}

fn example(){
    let mut h: HashMap<char, Vec<usize>> = HashMap::new();

    for (i, c) in "hello!".chars().enumerate() {
        h.entry(c).or_insert(Vec::new()).push(i); // in the fourth iteration entry(l) checks l and
        // found the vectror with one value 2 and returns a mutable reference of it then push.(i)
        // pushes 3 to the same vector 
    }

    let mut sum = 0;

    for i in h.get(&'l').unwrap() {
        sum += *i;
    }
    println!("{}", sum);

}
