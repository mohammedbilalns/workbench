const std = @import("std");

// aliasing 
const print = std.debug.print; 

pub fn main() void {
    const res : i32 = add(32, 32);
    var td = add(32, 2);
    td += 1;  
    std.debug.print("result: {}\n", .{res});
    var sdfe : i32 = 32; 
    sdfe +=  1 ;

    const condition : bool = true;  

    print("condition: {} n", .{condition});

    const slice:[]const u8 = "string literal";
    const slice_length: usize = slice.len;


    // array 
    // [_]i32 
    const array = [5]i32{1,2,3,4,5};
    const array_slice:[]const i32 = array[1..]; // slice from zero to the end(just reference) 
    //
    const ptr:*i32 = &array[0]; // reference of the first index of array 
    ptr.* = 0; // chaning the value  
    array_slice[0] = 32;

    print("content: {s}, length: {}, array: {any}, arraySlice: {any}", .{slice, slice_length, array, array_slice});

}

fn add(a: i32, b: i32) i32 {
    return a + b ;
}

// public function main which returns void 
fn printString(input: []const u8) void {
    std.debug.print(input, .{});
}


// Variable Types 
const number: i32 = 32; // makes a constant variable with 32 its and sets it to 32  
var another_number: i32 = 31; // makes a mutable variable with 32 bits and sets its value to 31
//  we can take whatever vale like i5 , i10, 
var num : usize = 32; // size of the architecture which runs the code   
const c : f32 = 32.32;
const d : f64 = 2343.32;

// slices : pointer and a length 
//[]u8 - mutable slice  
//[]const u8 - immutable slice 
//
