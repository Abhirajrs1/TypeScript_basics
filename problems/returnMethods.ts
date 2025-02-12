// Use void for return nothing/never use the return keyword

function greet(num:number):void{
    console.log( num*num)
}
greet(5);

// Use never for return no value 

function non(str:string):never{
    throw new Error(str);
    
}
non("Hi")