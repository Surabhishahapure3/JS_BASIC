const arr   = ["Akash","samay"]
/*
In case of array:
arr.__proto__:   Array.prototype
arr.__proto__.__proto__: Object.prototype
arr.__proto__.__proto__.__proto__ : null
*/

function fun()
{
    console.log("hello")
}

/*In case of function
fun.__proto__ : Function.prototype
fun.__proto__.__proto__ : Object.prototype
*/

let object = {
    name:"Surabhi",
    age : 21
}
/*
In case of object
object.__proto : Object.prototype
object.__proto__.__proto__ : null
*/


/**example of prototype********** */
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
  
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

/******************* prototype inheritance********/
let obj1 = {
    name : "Surabhi",
    age : 21,
    display : function()
    {
        console.log(`${this.name} age is ${this.age}`)
    }
}

let obj2 = {
    address: "Pune"
}

// this is not a good coding. but trough this we can access properties of oter object as well
obj2.__proto__ = obj1

console.log(obj2.display())


/* *********************prototype inheritance**********/
    Function.prototype.mybind = function()
    {
        console.log("hello")
    }

    function fun()
    {

    }

    console.log(fun.__proto__.mybind())



