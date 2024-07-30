// callbacks:
// A callback is a function passed as an argument to another function

/*Q1
function sum(a,b)
{
    console.log(a+b)
}

function calculator(a,b,sumCallback)
{
    sumCallback(a,b)
}

calculator(1,2,sum);  //3
*/

/* Q2

function sum(a,b)
{
    console.log(a + b)
}

function sub(a,b)
{
    console.log(a - b);
}

function cal(a,b,sumCallback,subCallback)
{
    sumCallback(a,b)
    subCallback(a,b)
}

cal(1,2,sum,sub)
*/

/*Q3*/

function hello()
{
    console.log("hello")
}
setTimeout(hello,3000) //this is call also an callback


// callbacks hell
// Nested callbacks stacked below one another forming  an pyramid


/*Q4
function getdataId(data,getNextdata)
{
    setTimeout(()=>
    {
        console.log("data",data)
        if(getNextdata)
        {
            getNextdata();
        }
    },2000);
}

getdataId(1,()=>{
    getdataId(2,()=>
    {
        getdataId(3)
    })
});
*/

/*Q5
function check(data,nextdata)
{
    setTimeout(()=>
    {
        console.log(data)
        if(nextdata)
        {
            nextdata();
        }
    },2000)
}

console.log("username is checking....." )
check("username",()=>
{
    console.log("password is checking......")
    check("password")
})
*/


// PROMISES:
// Promise is for eventual completion of task. It is an object in JS. It is a solution  to callback hell.
// It shows the future promises
/* syntax
let promise = new Promise((resolve,reject)=>{...})
*/

/*
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task completed");
        resolve();
    }, 1000);
});

promise.then(() => {
    console.log("Promise completed");
});
*/

/*
let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task completed");
        reject();
    }, 1000);
});

promise1.catch(() => {
    console.log("Promise incompleted");
});
*/


/*
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task completed");
        resolve();
    }, 1000);
}).then(()=>
{
    console.log("promise completed")
});

*/



/*
let promise = new Promise((resolve,reject)=>
{
    let error = false
    setTimeout(()=>
        {
            if(!error)
            {
                resolve({username :"Surabhi",password: "1234"})
            }
            else{
                reject("error something went wrong")
            }
        },1000)
    
})

promise.then((user)=>
{
    console.log(user)
    console.log(user.username)
}).then((username)=>
{
    console.log(username)
}).catch((error)=>
{
    console.log(error)
}).finally(()=>
{
    console.log("promise is either resolved or rejected")
})
*/

/*
function async()
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
            {
                
                resolve()
            },1000)
    })
}

let p1 = async();
p1.then(()=>
{
    console.log("fetching data 1.....")
    console.log("data 1 get")
    console.log("fetching data 2.....")
    let p2 = async()
    p2.then(()=>
    {
        console.log("data 2 get")
    })
})
*/

// Async and Await

// async function always returns promise    
// syntax: async function myfun(){.....}
// await pauses the execution of its surrounding async function until the promise is settled

/*
async function hello(data)
{
    return new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        console.log(data,"data")
        resolve()
    },1000)
});
}


async function getdata()
{
    console.log("fetching data 1 ......")
    await hello(1)
    console.log("fetching data 2 ......")
    await hello(2)
}

getdata()
*/


/*
function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: 'Alice' });
        }, 1000);
    });
}

function fetchPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(['Post 1', 'Post 2', 'Post 3']);
        }, 1000);
    });
}

async function displayUserData() {
    console.log('Fetching user...');
    const user = await fetchUser();
    console.log('User:', user);

    console.log('Fetching posts...');
    const posts = await fetchPosts(user.id);
    console.log('Posts:', posts);
}

displayUserData();

*/
/*
function fetchCurrentWeather(city) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ city: city, temperature: 25, condition: 'Sunny' });
        }, 1000);
    });
}

function fetchWeatherForecast(city) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { day: 'Monday', temperature: 26, condition: 'Cloudy' },
                { day: 'Tuesday', temperature: 24, condition: 'Rainy' },
                { day: 'Wednesday', temperature: 27, condition: 'Sunny' }
            ]);
        }, 1000);
    });
}

async function displayWeatherData(city) {
    console.log('Fetching current weather...');
    const currentWeather = await fetchCurrentWeather(city);
    console.log('Current Weather:', currentWeather);

    console.log('Fetching weather forecast...');
    const forecast = await fetchWeatherForecast(city);
    console.log('Weather Forecast:', forecast);
}

displayWeatherData('New York');

*/


// Array,ES6-ES10