// async-await
/*
function show() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("resolve");
            resolve("resolved value"); // Optionally pass a value to resolve
        }, 1000);
    });
}

async function showme()
{
    let a = await show()
    console.log(a)
}

showme()
*/

//pad-start-end
/*
let str = "hello guys"
console.log(str.padStart(20,"*"))
console.log(str.padEnd(20,"*"))
*/

/*
let num = '2'
console.log(num.padStart(2,'0'))
*/

//Object values and Object entities

/*
let obj = {
    name: "Surabhi",
    age: 21
}

console.log(Object.values(obj))
console.log(Object.entries(obj))
*/

/*******************************ES9**************** */


//Promise prototype finally
/*
function testFinally() {
    return new Promise((resolve,reject) => resolve())
  }
  
  testFinally().then(() => console.debug("resolved")).finally(() => console.debug("finally"))
*/

//Object rest properties and Object spred properties

/*
let info = { fname, lname, ...rest } = { 
    fname: "Hemanth", 
    lname: "HM", 
    location: "Earth", 
    type: "Human" 
};

console.log(fname,lname)


info;*/

/************************ES10********* */
//Flat

// The flat() method enables you to easily concatenate all sub-array elements of an array. 
/*arr = [10, [20, [30]]];

console.log(arr.flat());   
console.log(arr.flat(1));    
console.log(arr.flat(2));    */

/*flatMAP*****
let arr = [1,2,[3,4,[5]]]
let b = arr.flat(2)
// console.log(b)
let a = b.flatMap((x)=>
{
    console.log(x)
})

console.log(a)*/

//Object.fromentities
/*
let a = [['one',1],['two',2],['three',3]]
let b = Object.fromEntries(a)
console.log(b)*/

// trimStart and trimEnd
/*
let str = "   string   "
let b = str.trimEnd()
console.log(b)
console.log(str.trimStart())
*/