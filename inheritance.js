class person {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
    console.log("this is person");
  }
}

class programmer extends person {
  constructor(_name, _age, _language) {
    super(_name, _age);
    this.name = _name;
    this.age = _age;
    this.language = _language;
  }

  code() {
    return `${this.name} is fullstack developer.${this.name} years is ${this.age}.${this.language} is a used languade`;
  }
}
const kamal = new person("kamal", 34);
const chanuka = new programmer("chanuka", 23, "javascript");
console.log(chanuka.code());
