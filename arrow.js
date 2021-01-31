// //expression function
// function doubleIt(num){
//     return num*2;
// }

// //variable function
// const doubleIt = function muFun(num){
//     return num*2;
// }

//arrow function
const doubleIt = num => num*2;      //num holo parameter name...=> er bitor function lekha hoi
const add = (x, y) => x + y;        // e bave fun likhye return lekha lage na
const give5 = () => 5;
const doMath = (x,y) => {           // statement ekadik hole {} use krte hbe and  
    const sum = x + y;              // function return krte hbe
    const diff = x - y;
    const result = sum * diff;
    return result;
}

console.log(doubleIt(2));
console.log(add(10,20));
console.log(give5());

const result = doMath(5,7);
console.log(result);