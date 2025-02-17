//creating an object and adding prototype to it
function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.greet = function (){
    console.log(`Hello, I am ${this.name} and my age is ${this.age}`)
}

const person1 = new Person("Swathi",20);
const person2 = new Person("Murugesh",21);
person1.greet();
person2.greet();
