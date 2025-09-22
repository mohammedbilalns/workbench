function createUser(name, age) {
  this.age = age;
  this.name = name;

  this.sayName = function () {
    console.log("Name is" + this.name);
  };
  return "hi";
}

function createAdmin(name, age, password) {
  createUser.call(this, name, age);
  this.password = password;

  this.verifyPassword = function (input) {
    return input == password;
  };
}

const user1 = new createUser("fsdfsd", 32);
const admin1 = new createAdmin("sd", 4, "dsfsdf");
console.log(admin1);
admin1.verifyPassword();
user1.sayName();
