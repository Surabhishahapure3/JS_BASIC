
function* gen()
{
    yield 1
    yield 2
    return 3 // value:3 done:true
    return 4  // value:undefined done:true
}

let g = gen()
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())


for(let x of g)
{
    console.log(x)
}



const a = function* gen()
{
    yield 1
    yield 2
    yield 3
}
let c = a()
let sum = 0
for(let x of c)
{
    sum = sum + x
}
console.log(sum)



function* infinity()
{
    let inf = 0
    let a = 5
    while(inf<a)
    {
        yield inf++
    }
}

let c = infinity()
for(let x of c)
{
    console.log(x)
}
