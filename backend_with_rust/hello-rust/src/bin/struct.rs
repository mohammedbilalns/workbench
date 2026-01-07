#![allow(unused)]

// Struct 
struct  Point{
    x: f32,
    y: f32
}

#[derive(Debug)]
struct  Point3d(f32,f32, f32);

struct  Empty;

struct  Circle {
    center: Point,
    radius: u32
}

fn main() {
    // Create 
    let p = Point {x:1.32, y:2.32};
    print!("{}", p.x);
    let p = Point3d(1.0, 3.0,4.0);
    let empty  = Empty;
    let circle = Circle{
        center: Point {x: 1.0, y:2.0},
        radius: 1 
    };

    // Shortcut
    let x  = 1.0;
    let y = 1.0;
    let p  = Point {x, y}; // shorthand initialisation 
    // Copy fields 

    let p0 = Point {x: 1.0, y: 1.32};
    let p1 = Point {x: 3.0, ..p0};

    // Update
}
