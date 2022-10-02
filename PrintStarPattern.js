let n = 5;
let string = "";

// for (let i = 1; i <= n; i++) {
// for (let j = 0; j < i; j++) {
// string += "*";
// }
// string += "\n";
// }


// for (let i = 1; i <= n - 1; i++) {
// for (let j = 0; j < n - i; j++) {
// string += "*";
// }
// string += "\n";
// }
// console.log(string);


// for(let i = 1; i <= n; i++){
// for(let j = 1; j <= i; j++){
// string += "* ";
// }
// string += "\n";
// }
// console.log(string);


// let a = 0;
// for(let i = 1; i <= n; i++){
// for(let j = 1; j <= i; j++){
// string += a + j;
// }
// string += "\n";
// }
// console.log(string)


// for(let i = 0; i <=  2*n-1; i++){
// let cols = i > n ? 2*n-i : i;
// for(let j = 0; j < cols; j++) {
// 
// string += "* ";
// }
// string += "\n";
// }
// console.log(string);



// for(let i = 0; i <= 2*n-1; i++){
// let cols = i > n ? 2*n-i : i;
// let space = n-cols;
// for(let s = 0; s < space; s++){
// string += " ";
// }
// for(let j = 0; j < cols; j++) {
// 
// string += "* ";
// }
// string += "\n";
// }
// console.log(string);

// Square Pattern
// for(let i = 0; i < n; i++){
// for(let j = 0; j < n; j++){
// string += "* ";
// }
// string += "\n";
// }
// console.log(string);

// Hollow square
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if(i === 0 || i === n-1){
      string += "*";
    }else if(j === 0 || j === n-1){
string += "*";
    }else{
      string += " ";
    }
  }
  string += "\n";
  }
console.log(string);
















