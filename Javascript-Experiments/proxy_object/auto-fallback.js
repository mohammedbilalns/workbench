

let me = {name:"bilal", age:32, password : "**"}

me = new Proxy(me, {
  get(target, prop){ // target -> Object passed as first arg(me) , prop - property of the object(name/age)
   return prop in target ? target[prop] : "Not found" 
  }

})

console.log(me.city)
