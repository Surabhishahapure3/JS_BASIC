
/* IIFE (Immediate Invoke function expression)*/

(function y()
{
    console.log("hello")
})();



/***Two Immediate function*/

(function x()
{
    console.log("hello")
})();

(function y()
{
    let name = "Surabhi";
    let age = 21
    console.log(`${name} age is ${age}`)
})()


/* We can do IIFE without arrow function as well*/
(()=>
{
    console.log("hello")
})();


/* during two immediate function calling we have to complete the 
first function by adding semi colon at the last it shows function has been ended*/
((a,b)=>{
    console.log(a+b)
})(12,34);

((a,b)=>{
    console.log(a-b)
})(12,34);
