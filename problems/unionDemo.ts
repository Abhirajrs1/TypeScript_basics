// Sample variable
let nums:number | string ="Hi"
console.log(typeof nums);

// With obj (Didn't accept the type include different field)

type User1={
    name:string,
    age:number
}

type User2={
    myName:string,
    isAvail:boolean
}

let mine:User1|User2={name:"Abhiraj",age:25}

// With function

function cla(num:number | string){
    return `The value is ${num}`
}

console.log(cla("Abhiraj"));

// With array

let arr:Array<number|string>=[1,2,3,"Alan"]
    //   or
 let arr1:(number |string)[]=[1,2,3,"Alan"]

console.log(arr)

