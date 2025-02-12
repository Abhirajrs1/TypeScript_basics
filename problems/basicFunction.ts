// Number
function num(val:number){
    return val+2
}
console.log(num(5));

// String

function no(value:string){
    return value.toUpperCase()
}
console.log(no("abhiraj"));

// Multiple arguments

let multiple=(name:string,numb:number)=>console.log(`The name is ${name} and the value is ${numb}`);

multiple("Abhiraj",26)

// Function with return types

function tr(num:number):number{
    return num*3
}
console.log(tr(6))


function str(valu:string):string{
    return valu.toLocaleLowerCase()
}
console.log(str("ALAN"))

  