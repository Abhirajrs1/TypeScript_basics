// Two different ways to declare arrays

const numb:number[]=[]
numb.push(5)
console.log(numb);

const ki:Array<string>=[]
ki.push("Abhiraj")
console.log(ki);

// Arrays with type alias

type Users={
    name:string,
    age:number,
    isAvailable:boolean
}

let conso:Array<Users>=[]
conso.push({name:"Alan",age:25,isAvailable:true})
console.log(conso);


