// Type alias with function

type User={
    name:string,
    age:number,
    isAvailable:boolean
}

function greek(user:User){
    return `The name is ${user.name} and age is ${user.age}`}

console.log(greek({name:"Abhiraj",age:23,isAvailable:true}));

