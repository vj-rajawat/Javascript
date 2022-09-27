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
    // string += "*";
  // }
  // string += "\n";
// }
// console.log(string)
// 
// let a = 0;
// for(let i = 1; i <= n; i++){
  // for(let j = 1; j <= i; j++){
    // string += a + j;
  // }
  // string += "\n";
// }
// console.log(string)

for(let i = 0; i < n; i++){
  for(let j = 0; j <= i; j++){
    let space = n - j;
    for(let s = 0; s < space; s++)
string += "";
  }
string += "* ";
}
console.log(string);