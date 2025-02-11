type Pro={
    a:number,
    b:number
}

function sum(r:Pro){
    return r.a+r.b
}

console.log(sum({a:25,b:10}))

