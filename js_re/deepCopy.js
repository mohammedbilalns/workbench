
// 
function deepCopy(obj, res = {}){

  if (typeof obj !== "object") return obj 

  for(let [key, value] of Object.entries(obj)){

    if(value == null || value == undefined || typeof value != "object"   ){
      res[key] = value 
    }else if(Array.isArray(value)){
      const updatedArr = []
      for(let elem of value){
        updatedArr.push(deepCopy(elem))
      }
      res[key] = updatedArr
    }else{
      res[key] = deepCopy(value, {})
    }
  }

  return res 
}


  const obj = {
  name: "Bilal",
  age: [32,23,23,232],
  address: {
    city: "Delhi",
    fdsfsdf: null,
    fsdfs:"fsdfsd"
  },
  fdfsdf:null
}
const rs = deepCopy(obj)
rs.age[0] = 987
console.log(obj)
console.log(rs)
