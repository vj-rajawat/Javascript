// let student = [
// {name:'vijay' , degree:'bca', role:'php_dev'},
// {name:'sandeep' , degree:'ba', role:'business'},
// {name:'nishant' , degree:'mca', role:'js_dev'},
// {name:'karitkey' , degree:'btech', role:'angular_dev'},
// ];
// 
// let mapResult = student.map((value,i) => {
// return student[i].name.toUpperCase();
// });
// console.log(mapResult);

// Chapter 5 Practice set
1
// let arrayNum = [1,3,4,5,6];
// let takeNum = prompt('enter the number');
// a = Number.parseInt(takeNum);
// arrayNum.push(a);
// arrayNum.typeof();
// console.log( arrayNum);

// 2
// let arrayNum = [1, 30, 4, 50, 6, 90, 100];
// let takeNum;
// do {
    // takeNum = prompt('enter the number');
    // let a = Number.parseInt(takeNum);
    // arrayNum.push(a);
// 
// }
// while (takeNum != 0)
// 
// console.log(arrayNum);

// 3
// let arrayNum = [1, 30, 4, 50, 6, 90, 100];
// let arrDividedBy = arrayNum.filter((value) => {
    // return (value*value);
// });
// console.log(arrDividedBy);

// 4
// let arrayNum = [1, 30, 4, 50, 6, 90, 100];
// let arrDividedBy = arrayNum.map((value) => {
    // return (value*value);
// });
// console.log(arrDividedBy);

// 5
let arr = [1,2,3,4,5,6,7,8];
let factorial = arr.reduce((pvalue,cvalue) => {
    return (pvalue*cvalue);
});
console.log(factorial);
