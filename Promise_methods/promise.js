/*function a()
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
            {
                console.log("first")
        resolve()
            },1000)
    })
}

function b()
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
            {
                console.log("Second")
        reject(20)
            },2000)
    })
}

function C()
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
            {
                console.log("Third")
        reject(20)
            },4000)
    })
}

let p1 = a()
let p2 = b()
let p3 = c()
*/

/*
let sum = 0
Promise.all([p1,p2]).then((results)=>
{
    for(let x in results)
    {
        sum = sum + results[x]
    }
    console.log("Success")
    console.log(`Results: ${sum}`)
}).catch(()=>
{
    console.log("Error")
})
*/
/*
Promise.any([p1,p2,p3]).then((results)=>
{
    console.log(`Result: ${results}`)
}).catch((error)=>
{
    console.log(`error: ${error}`)
})
*/

function a() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log("first");
            return Promise.resolve(10);
        }, 5000);
    });
}

function b() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log("Second");
            return Promise.resolve(20);
        }, 2000);
    });
}

function c() {  // Fixed function name to 'c' to match the call
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log("Third");
            return Promise.reject(20);
        }, 4000);
    });
}

let p1 = a();
let p2 = b();
let p3 = c();

/* Promise.all
Promise.all([p1,p2,p3]).then((results)=>
{
    console.log(`All promises are resolved:${results}`)
}).catch((error)=>
{
    console.log(`all are rejected:${error}`)
})
*/

// Promise.any
// Promise.any([p1, p2, p3])
//     .then((result) => {
//         console.log(`Result: ${result}`);
//     })
//     .catch((error) => {
//         console.log(`error: ${error}`);
//     });

/* Promise.race
Promise.race([p1,p2,p3]).then((results)=>
{
    console.log(`first resolved: ${results}`)
}).catch((error)=>
{
    console.log(`first error:${error}`)
})
*/

/*
Promise.allSettled([p1,p2,p3]).then((results)=>
{
    results.forEach((val)=>
    {
        if(val.status=="fulfilled")
        {
            console.log(val.value)
        }
        else{
            console.error("reason for rejection")
        }
    })
})
*/

Promise.resolve([p1,p2,p3]).then((results)=>
{
    console.log(`${results}`)
})