function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(this.name + "Speaking");
};

function Dog(name) {
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);

const dog = new Dog("dogname");
dog.speak();
