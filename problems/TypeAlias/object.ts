// Type with explicit create an obj

type Person={
    name:string,
    age:number,
    place:string
}
let my:Person={
    name:"Abhiraj",
    age:25,
    place:"Thiruvananthapuram"
}

console.log(my)

// Use the readonly(can't change) and ?(To avoid the error while didn't assign values)

type Per={
    readonly name:string,
    age:number,
    place:string,
    creditCard?:number
}
let myn:Per={
    name:"Abhiraj",
    age:25,
    place:"Thiruvananthapuram"
}

console.log(myn)

// Use & to combine 2 or more type and assign values

type cardNumber={
    num:number
}

type cardName={
    name:string
}

type cardDetails=cardNumber & cardName &{val:number}

let k:cardDetails={
    num:25,
    name:"Abhi",
    val:25000
}
console.log(k);


