const person = {
  talk(){
    return "talking"
  }
}

const me = Object.create(person) // inherited object 
Object.setPrototypeOf(me, person) // another way to inherit 
console.log(me.fly())
