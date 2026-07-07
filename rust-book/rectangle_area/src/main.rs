fn main() {
    second_one()
}

// ----------------------------------------------------------------------
// Simple methode 
fn first_one() {
    let rect1 = (30,40);

    println!("The area of  the rectangele is {} square pixels.",area(rect1));
}

fn area(dimensions: (u32,u32)) -> u32 {
    dimensions.0 * dimensions.1
}
//-----------------------------------------------------------------------
//Using Structs 
struct Rectangle {
    width: u32,
    height: u32,
}
impl Rectangle {
    fn new(width: u32, height: u32) -> Rectangle{
        Rectangle{width,height}
    }
    fn area(&self) -> u32 {
        self.width * self.height
    }
 }
fn second_one(){
    let rect1 = Rectangle::new(30, 43);
    let area = Rectangle::area(&rect1);
    println!("The area is {area}");
}
fn area2(rectangle: &Rectangle) ->u32 {
    rectangle.width * rectangle.height
}
//-----------------------------------------------------------------------
// one recta
