// Getter and Setter (get- Read, set- Access and modify the value from the outside) for the private properties
// "Protected" key for using the modify and access values from the inherited classes

class Getter{
    protected _age:number
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

class Parent extends Getter{
    changeColour(){
        return this._age=35
    }
}
let getter=new Getter(25)
console.log(getter.age)
getter.age=30
console.log(getter.age)


