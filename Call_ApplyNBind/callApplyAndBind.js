
/*Q1*/
let name = {
    name:"Surabhi",
    age: 21,
    address: "Chinchwad"
}

let printfull_info = function one(hobbies)
{
    console.log(this.name + " "+ this.age + " " + this.address + this.hobbies)
}

printfull_info.call(name,"dancing")


let info = {
    name: "Maharashtra",
    age: "Pune",
    address: "India"
    
}

printfull_info.call(info,"singing")



/* Q2*/
const person1 = {
    name: 'John',
    introduce: function() {
        console.log(`Hi, my name is ${this.name}.`);
    }
};

const person2 = {
    name: 'Jane'
};

person1.introduce.call(person2);  



/*Q3*/
let student = {
    firstname:"Surabhi",
    lastname: "Shahapure",
    age: 21,
}

function info(firstname,lastname)
{
    return `${this.firstname}  ${this.lastname}`;
}

let teacher = {
    firstname: "shila",
    lastname: "patel",
    age: 32,
}

console.log(info.call(teacher))



/* Q4*/
let student = {
    firstname : "Surabhi",
    lastname: "Shahapure",
    age : 21,
    password: 12345,
}

let teacher = {
    firstname : "Peter",
    lastname : "parker",
    age : 32,
    password : 5662,
}

function email()
{
    return `${this.firstname}${this.lastname}321@gmail.com`
}

function pass()
{
    return `${this.password}`
}



console.log(email.call(student))
console.log(pass.call(student))

console.log(email.call(teacher))
console.log(pass.call(teacher))




/* Q5*/
const obj1 = {
    value: 100,
    getValue: function() {
        return this.value;
    }
};

const obj2 = { value: 42 };

console.log(obj1.getValue.call(obj2));  


// Apply

/*Q1*/
function sum(a, b, c) {
    return a + b + c;
}

const result = sum.apply(null, [1, 2, 3]);
console.log(result);  


/*Q2*/
let teacher = {
    firstname : "Peter",
    lastname : "parker",
    age : 32,
    password : 5662,
}

function choosesub(sub1,sub2)
{
    return [sub1,sub2]
}

// let sub = 
console.log(choosesub.apply(teacher,["maths","english"]))


/* Q3*/
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

array1.push.apply(array1, array2);

console.log(array1);  


/* Q4*/
const numbers = [5, 6, 2, 3, 7];
const max = Math.max.apply(null, numbers);
console.log(max);  // Output: 7



/*Q5*/
const person1 = {
    name: 'Alice',
    age: 25,
    greet: function(greeting, punctuation) {
        return `${greeting}, my name is ${this.name}${punctuation}`;
    },
    
};

const person2 = {
    name: 'Bob',
    age: 30
};

const numbers = [5, 10, 15, 20, 25];

function getMinMax(numbers) {
    const min = Math.min.apply(null, numbers);
    const max = Math.max.apply(null, numbers);
    return { min, max };
}
const greeting = person1.greet.apply(person2, ['Hello', '!']);
console.log(greeting);  // Output: Hello, my name is Bob!


let maxnum = getMinMax(numbers)
console.log(maxnum)



// Bind
/*Q1*/
let nums = [1,2,3,4,5,6,7]
function max()
{
    let maxi = Math.max.apply(null,nums)
    return maxi
}

let max_num = max.bind(nums)

console.log(max_num())


/*Q2
*/
let addition = [12,3,4,5,6,7,8,9]
let sum=0
function add()
{
    addition.forEach((data,index)=>
    {
        sum = sum + data
        
    })
    console.log(sum)
}

let add_num = add.bind(addition)
console.log(add_num())


/*Q3*/

let s= [12,3,4,5,6,7,8,9]
let sub=0
function subs()
{
    s.forEach((data,index)=>
    {
        sub = sub - data
        
    })
    console.log(sub)
}

let add_num = subs.bind(s)
console.log(add_num())


/*Q4*/

function greet(greeting, punctuation) {
    return `${greeting}, ${this.name}${punctuation}`;
}

const person = {
    name: 'Alice'
};

const greetAlice = greet.bind(person, 'Hello');


console.log(greetAlice('!'));  


/*Q5*/

function multiply(a, b) {
    return a * b;
}


const multiplyByTwo = multiply.bind(null, 2);

console.log(multiplyByTwo(5));  
console.log(multiplyByTwo(10)); 
