const ages = [12, 14, 11, 17, 89];
const ages2 = [15, 1, 16];
const ages3 = [22, 34, 23, 77];

const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, "t", ...ages3];         //string jog kra

// console.log(allAges2);

const business = 650;
const minister = 450;
const sochib = 250;
const takaPoisa = [10, 20, 50, 90, 1 , 2, 23];

const maximum = Math.max(business, minister, sochib);
const maximum2 = Math.max(...takaPoisa);                    //...use kre array teke o max kre ja

console.log(maximum2);