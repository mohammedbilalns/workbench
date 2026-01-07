
function greet(name){
  console.log(`Hello `, name)
}

const safeGreet = new Proxy(greet, {
  apply(target, thisArgs, args){
    if(typeof args[0] !==  "string"){
      throw new Error("Expected string as the first arguments ")
    }

    return Reflect.apply(target, thisArgs, args)
  }
})
