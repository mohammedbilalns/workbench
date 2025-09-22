const person = {
  firstname: "bilal",
  get name() {
    return this.firstname;
  },
  set name(name) {
    this.firstname = name;
  },
};

person.name = "fsdljfnsd";
console.log(person);
