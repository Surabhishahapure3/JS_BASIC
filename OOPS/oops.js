/**Objects*** */
/**Object-Oriented Programming (OOP) is a programming paradigm that uses objects and classes to structure software. It is one of the most widely 
 * used programming paradigms in modern software development. OOP provides a clear modular structure for programs, making it easier to manage, maintain,
 *  and scale complex software systems. */

let student = {
    name:"Surabhi",
    age: 21,
    branch : "IT",
    display : function()
    {
        console.log(`${this.name} age is ${this.age} and is in the branch of ${this.branch}`)
    }
}

console.log(student.name)
console.log(student.display())

// Objects can be created in two forms literal and constructed forms

function obj1(name,age,branch)
{
    this.name = "Surabhi",
    this.age = 21,
    this.branch = "IT",

}

/***Classes in JavaScript are a blueprint for creating objects, introduced in ES6. They encapsulate data and behavior 
 * by defining properties and methods, enabling object-oriented programming. Classes simplify the creation of objects and 
 * inheritance, making code more organized and reusable. */

/***
Constructor Method
The constructor method in JavaScript is a special method used for initializing objects created with a class. */
/*****Q1 */
class emp {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }
}
const emp1 = new emp("Geek1", "25 years");
console.log(emp1.name);
console.log(emp1.age);

/****Q2**** */
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  
  const person1 = new Person("Alice", 30);
  console.log(person1.name); // Output: Alice
  console.log(person1.age);  // Output: 30
  
  const person2 = new Person("Bob", 25);
  console.log(person2.name); // Output: Bob
  console.log(person2.age);  // Output: 25


  /****Q3** */
  class emp {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }
}
const emp1 = new emp("Geek1", "25 years");
const emp2 = new emp("Geeks2", "32 years")
console.log(emp1.name + " : " + emp1.age);
console.log(emp2.name + " : " + emp2.age);


/****Encapsulation: It is defined as the wrapping up of data under a single unit.
 * It is the mechanism that binds together code and the data.
 * The javascript Encapsulation is a process of binding the data with 
 * the functions acting on that data
 */

class Student{
    constructor()
    {
        let name,marks
    }
    getinfo(name,marks) {
        this.name = name
        this.marks = marks
        console.log(`student info: Student name: ${this.name} || Student marks:${this.marks}`)
    }
}

let s1 = new Student()
s1.getinfo("Surabhi",90)


/****Inheritance:   inheritance refers to passing down characteristics from a parent to a child so that a new piece of code can reuse and build upon
 *  the features of an existing one. */


class Employee {
    constructor(name) {
        this.name = name;
        console.log("employee part", this.name);
    }
    
    getid() {
        let a = 101;
        console.log(`${this.name} employee id is ${a}`);
    }
}

class Manager extends Employee {
    constructor(name, age) {
        super(name); // Pass the name to the Employee constructor
        this.age = age;
        console.log("manager part", this.age);
    }
}

let a = new Manager("Surabhi", 21);
a.getid();


/***Polymorphism: poly:many  and form : forms polymorephism: many forms the variable ,function or object acts different in different situiation*/


class Shape{
    draw()
    {
        console.log("Shape class")
    }
}
class Rectangle extends Shape{
    
    draw()
    {
        super.draw()
        console.log("Rectangle class")
    }
}
class Circle extends Rectangle{
    draw()
    {
        console.log("Circle class")
    }
}


// let a = new Shape()   
// a.draw()

let b = new Rectangle()   
b.draw()



