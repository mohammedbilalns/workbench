// used to reduce code duplication 
// can do without and with classes 

// const me = {
//   talk(){
//     return "talking"
//   }
// }
//
// const you = {
//   talk(){
//     return "talking"
//   }
// }

// repetation of code above 
// to updated we have to update in multiple  times 

class Person {
  talk(){
    return "Talking"
  }
}

const me = new Person()
const you = new Person()

console.log(me.__proto__ === Person.prototype)
// modify the prototype 
Person.prototype.talk = function(){
  return "Improved talking"
}
