// ES6 features
/**earlier there was var in es6 the let and const get introduced */
// 1. var ,let,const:
// let and const these variables comes in es6 

// 2. Arrow function:
// advantage: shorter syntax, implicit return
// disadvantages are: 1. No 'this' binding 2. Cannot be used as constructor 3. cannot use super 4. Not suitable for call,apply,and bind methods
/*
const square = (x)=> return x * x


console.log(square(2))
*/

//3. Multi line string: To use multiline string we use back tick
/*
console.log(`Mumbai
Pune
Aurangabad`)
*/

// 4. Default Parameters
/*
let sum = (x=1,y=2)=> x + y

console.log(sum()) //without passing parameters
console.log(sum(4,5))   //with passing parameters
*/

// 5. Template Literals
/*
let x = 5
let y = 10
let sum = x + y
console.log(`Addition of ${x} and ${y} is ${sum}`)
*/

// Destructuring
/*
let arr = [12,34]

let [x,y] = arr
console.log(x)
console.log(y)
*/
/*
let obj = {
    name : "Surabih",
    age : 21
}
let {name,age} = obj
console.log(name)
console.log(age)
*/

/*
let arr = [1,2,3,4,5,6,7,8]

let [x,y,...rest] = arr

console.log(x)
console.log(y)
console.log(rest)
*/



// Classes
/*
class Person{
    constructor(uname,uage)
    {
        this.name = uname;
        this.age = uage;
    }
    details()
    {
        console.log(`The age of ${this.name} is ${this.age}`)
    }
}

let p1 = new Person("Surabhi",21)
console.log(p1)
*/

/*
class student{
    constructor(uname,ubranch)
    {
        this.name = uname;
        this.branch = ubranch;
    }
    details()
    {
        console.log(`The student ${this.name} is branch of ${this.branch}`)
    }
}

let p2 = new student("Surabhi","IT");
p2.details()
console.log(p2)

let p3 = new student("Praj","IT")
p3.details()
console.log(p3)
*/

/*
class add{
    constructor(a,b)
    {
        this.a = a
        this.b = b

    }
    details()
    {
        let sum = this.a + this.b
        console.log(`addition is ${sum}`)
    }
}

let p1 = new add(3,4)
p1.details()
console.log(p1)
*/

// Enhanced object literals

/*
let name = "ram"
let age = 21

student = {
    name,
    age,
    display:function()
    {
        console.log(`${this.name} age is ${this.age}`)
    }
}

// console.log(student)
let obj1 = student;
console.log(obj1)
obj1.display()
*/

/*
let name = "shyam"

student={
    [name] : true
}

console.log(student)
*/

/*
let i = 1
person = {
    [i + 1] : "inc",
    [i - 1] : "dec"
}

console.log(person)
*/
// spread operator