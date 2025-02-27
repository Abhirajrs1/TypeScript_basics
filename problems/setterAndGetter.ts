// Getter and Setter (get- Read, set- Access and modify the value from the outside) for the private properties

class Getter{
    private _age:number
    constructor(age:number){
      this._age=age
    }
    get age():number{
        return this._age
    }
    set age(value:number){
        if(value<0){
            throw new Error("This is invalid");
        }else{
            this._age=value
        }
    }
}
let getter=new Getter(25)
console.log(getter.age)
getter.age=30
console.log(getter.age)

