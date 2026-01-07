const person = {}

person.name  = "sdf1"
person.age  = 32
const arr = ["sdf", "fsdf"]
// Array inheritance from ojbect and arr inhert from Array 
const name = "sdf"
// String inherits from object and name inherits from String  
const human = {age:12} 
const person1 = Object.create(human) // inherits human  
person1.age = 32
const person2 = Object.create(person1) // inhertits person1 and it inherits human 

// __proto__ is a property of every variable pointing to the parent object where it is inherited from , prototype is the property of the constructor function that will be inherited by its instances 
 // const me = {}  is same as const me = new Object()
const address = new String()
address.length = 32
console.log(address.length)
