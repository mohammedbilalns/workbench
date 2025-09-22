// function binding

const obj = {
  name: "bilal",
  age: 10,
};

function sayName(age) {
  console.log("Name: " + this.name + "Age: " + age);
}

const binded = sayName.bind(obj);
binded();
