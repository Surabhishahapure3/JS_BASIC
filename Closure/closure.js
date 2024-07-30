/*a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time
 a function is created, at function creation time.*/

/*********/
function x()
{
    let x = 7;
    function y()
    {
        console.log(x)
    }
    y()
}

x()


/*********/
function x()
{
    var a = function()
    {
        console.log("hello")
    }
    a()
}
x()


/*********/
function makeAdder(x) {
    return function (y) {
      return x + y;
    };
  }
  
  const add5 = makeAdder(5);
  const add10 = makeAdder(10);
  
  console.log(add5(2)); // 7
  console.log(add10(2)); // 12



// function even can return in closure

function x()
{
    var a = 7;
    function y()
    {
        console.log("hello")
    }
    return y;
}
var a = x()
console.log(a)


/*********/
function x()
{
    var a =12;
    var b =13;
    function y()
    {
        console.log("addition of a and b is ")
        console.log(a+b)
    }
    y()
}

x()



function a(marks)
{
    let sum =0;
    for(let i=0;i<marks.length;i++)
    {
        sum = sum + marks[i];
    }
    console.log(sum)
    function avg()
    {
        let num = 3
        let averge = sum / num
        console.log(averge)

    }
    avg()
}

marks = [45,67,90]

a(marks)


