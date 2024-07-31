// function myfunction(a,b)
// {
//     return 12*34
// }

// let a = myfunction(2,5);
// console.log(a)

/*var is global scope
function abc()
{
    var a = "hello"
    console.log(a)
}
var a = 12
console.log(a)
abc()
*/

const greet = function(name) {
    return `Hello, ${name}!`;
};

console.log(greet('Bob')); // Output: Hello, Bob!


const greet1 = (name) => `Hello, ${name}!`;

console.log(greet1('Charlie')); // Output: Hello, Charlie!


