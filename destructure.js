const person = {name:'jack william', age:17, job:'facebook', gfName:'ema watson', phone:01717112211};

const gfName = person.gfName;           //destructure holo kono object teke kicu property kono variable a store kra
// const phone = person.phone;

// const {phone, gfName} = person;
// console.log(gfName, phone);

const complexObject = {
    name:'abc',
    info:{
        address:"kochu khet",
        leader:"Tanjin",
    }
} 
const {leader} = complexObject.info;        //destructure
console.log(gfName, leader)