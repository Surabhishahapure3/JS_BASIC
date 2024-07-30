/*
Higher-Order Functions
In Javascript, functions can be assigned to variables in the same way that strings or arrays can. They can be passed into other functions as parameters or returned from them as well.

A “higher-order function” is a function that accepts functions as parameters and/or returns a function.
*/


/* Q1*************/
const radius = [2,3,4,5]

const area = function(radius)
{
    console.log(Math.PI*radius * radius)
}
const diameter = function(radius)
{
    console.log(2 * radius)
}
const calculate = function(radius,logic)
{
    let output = []
    for(let i=0; i<radius.length;i++)
    { 
        output.push(logic(radius[i]))
    }
    console.log(output)
}

calculate(radius,area);
calculate(radius,diameter)


/* Q2**************/
function callbackFunction(){
    console.log('I am  a callback function');
}

// higher order function
function higherOrderFunction(func){
    console.log('I am higher order function')
    func()
}

higherOrderFunction(callbackFunction);




/* Q3**************/
const dimension = function(a,b)
{
    console.log(a + b)
}

const mul = function(a,b)
{
    console.log(a-b)
}

const cal = function(func,a,b)
{
    // console.log("Addition:")
    func(a,b)

}

cal(dimension,12,33)
cal(mul,12,43)
