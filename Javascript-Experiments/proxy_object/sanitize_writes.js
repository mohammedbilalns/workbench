

let me = {name:"bilal", age:32, location: "TV", password : "**"}

me = new Proxy(me, {
  set(target, prop, value){ // target -> Object passed as first arg(me) , prop - property of the object(name/age)
    if(prop === "location"){
      throw new Error("You cant overwrite location ")
    } 

    if(prop == 'age' && value < 0){
      throw new Error("Age should be positive")
    }
    return Reflect.set(target, prop, value)
    
  },

})

me.age = -3432 
me.name = "sdf"

console.log(me)
