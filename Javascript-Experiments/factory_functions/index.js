// function that creates and returns objects 
// we can avoid repetion of codes with it 

function personFactory(name){
  const object = {
    talk(){
      return  `Hello i am ${name}`
    }
  }
  return object
}
const me = personFactory("bilal") // with this we cant override the name property 
console.log(me) 
// benefits 
// - simple 
// - data privacy 
// - deduplication of code 
