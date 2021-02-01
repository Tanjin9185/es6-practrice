class Parent{
    constructor(){
        this.fatherName = "Tuhin";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){                                  //class er bitor constructor r pasa pasi function lekha ja..,but function likhte hoi na..function name likhye dite hoi..class er bitor function k method bole..e function a extends kra class er constructor property o use kra ja
        return this.name + " " + this.fatherName;   
    }
}
const baby = new Child("Arman");
const baby2 = new Child("Tom")
console.log(baby.getFullName());
console.log(baby2);