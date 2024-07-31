// JavaScript has 8 datatypes
// 1. String 
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object

// Primitive:
// String,Number,Boolean,null,undefined,Symbol

// const score = 100
// console.log(typeof(score))

// const score1 = false
// console.log(typeof(score1))

// const name = "Surabhi"
// console.log(typeof(name))

// const a = null
// console.log(typeof(a))

// let undef
// console.log(typeof(undef))

// const id = Symbol('123')
// const anotherid = Symbol('123')
// console.log(typeof(id))
// console.log(id === anotherid)

const Bignumber = 234567885n
console.log(typeof(Bignumber))
// Non-Primitive:
// Array,Object,Functions

// const hero = ["Surabhi","Alisha","Sham"]
// console.log(typeof(hero))

// const b = {
//     name:"Surabhi",
//     age:21
// }
// console.log(typeof(b))

const myfunction = function()
{
    console.log("Hello World")
}
console.log(myfunction)