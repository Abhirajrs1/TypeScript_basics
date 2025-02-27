// Basic class(Public)

class Name{
    name:string
    age:number
    constructor(name:string,age:number){
    this.name=name
    this.age=age
}
}
let n=new Name("Abhiraj",26)
n.name="Alan"
console.log(n.name)