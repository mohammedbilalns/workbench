// js object with customizable basic operations o

let me = {name:"bilal", age:32, password : "**"}

me = new Proxy(me, {
  get(target, prop){ // target -> Object passed as first arg(me) , prop - property of the object(name/age)
    
    console.log("Accessed, ", prop)
    return target[prop]
  }

})

me.password

