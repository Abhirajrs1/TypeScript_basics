// Basic class(Public)

class Name{
    name:string
    private age:number
    constructor(name:string,age:number){
    this.name=name
    this.age=age
}
}
let n=new Name("Abhiraj",26)
n.name="Alan"
console.log(n.name)

// Modern and professional way to pass the values and access in the class

class Gender{
    constructor(public gender:string,private id:number){
    }
}
let gend=new Gender("Male",1)
gend.gender="Female"
// gend.id=25 //We can't access it outside the class
console.log(gend.gender)
