use std::slice::Iter;
fn main() {
   find_until(&vec![1,2,3], 3, 3); 
}
fn initialisation(){
   // Automatic type inference 
    let mut  vec1 = vec!["fsd","fsd","slf"];
    // Explicit with type 
    let mut vec2 = Vec::<i32>::new();
    let mut vec3 = Vec::new();
    vec3.push(54.54);
    vec2.push(5);
    vec1.push("flsjdbf");
    // iterate in for 
    for i in vec1.iter(){
        println!("{i}");
    }

}
fn iteratinn(){
    let mut v = vec![100,32,54];
    for n_ref in &v {
        let n_plus_one = n_ref +1;
        println!("{n_plus_one}");
    }
    for n in &mut v {
        *n += 50;
    }
    println!("{:?}",v);
}

fn find_until(v: &Vec<i32>, n: i32, til: usize) -> Option<usize> {

  for i in 0 .. til {

    if v[i] == n {

      return Some(i);

    }

  }

  return None;

}

fn iterate_safely(){
    let mut v = vec![1,2];
    let mut iter: Iter<'_, i32>  = v.iter(); // .iter acquires each element of vecrot as Option 
    let n1: &i32 = iter.next().unwrap(); // unwrap access the element from Option if it is Some 
    let n2: &i32 = iter.next().unwrap();
    let end: Option<&i32> = iter.next(); // This is None since all elements of v are iterated 

}

fn iter_usingrange(){
    let mut v: Vec<i32>        = vec![1, 2];
    let mut iter: Range<usize> = 0 .. v.len();
    let i1: usize              = iter.next().unwrap();
    let n1: &i32               = &v[i1];
}

fn different_elementsusingenum(){
     enum SpreadsheetCell {
        Int(i32),
        Float(f64),
        Text(String),
    }

    let row = vec![
        SpreadsheetCell::Int(3),
        SpreadsheetCell::Text(String::from("blue")),
        SpreadsheetCell::Float(10.12),
    ];
}
