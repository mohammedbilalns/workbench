
function Person(){
  this.talk = function(){
    return "talking"
  }
}
// when attahing to the this it only copies to the instances 
const me = new Person()
console.log(me.talk())
Person.talk = function(){
  return "sdklnfls"
}
console.log(me.talk())
// talk will be same as initial as the talk value is copied from constructor 
