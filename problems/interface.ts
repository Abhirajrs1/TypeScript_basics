interface Use{
    name:string,
    age:number,
    isAvailable?:boolean
}
const kg:Use={
    name:"Abhiraj",
    age:26,
    isAvailable:true
}
console.log(kg)

// We can merge it using the extends keyword

interface h1{
    name:string
}
interface h2 extends h1{
    age:number
}
const malay:h2={
   name:"Alan",
   age:24
}
console.log(malay);

