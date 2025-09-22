class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayName = function () {
    console.log("Name is " + this.name);
  };
}

class Employee extends Person {
  constructor(name, age, title) {
    super(name, age);
    this.title = title;
  }

  sayTitle = function () {
    console.log("Title is " + this.title);
  };
}
const pr = new Person("somename", 45);
console.log(pr.sayName());
const emp = new Employee("employeename", 35, "HR");
console.log(emp.sayTitle());
