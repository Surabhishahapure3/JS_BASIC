/*var:
var is globally scoped while let and const are block scoped
var can be updated as well re-declare
let: 
let can be updated but not re-declare

const: 
const const can neither be updated nor re-declared
*/

// let is blocked scoped
// let b = "harry"
{
    let b = 12
    console.log(b)
}

console.log(b) 


/*var is global scoped
var a = "surabhi"
{
    var a = 23
    console.log(a)
}
console.log(a)
*/

