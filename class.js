class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "kolimunnesa school"
    }
}

const student1 = new Student(12, "shuvo");
const student2 = new Student(22, "Mahiya");


console.log(student1, student2.name);