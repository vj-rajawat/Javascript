// Chapter 3
// Q1
const marks = {
  vijay: "40",
  vighnesh: "49",
  sidharth: "50",
  shubham: "51",
};
for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log(marks[Object.keys(marks)[i]]);
}

// Q2 For in loop
for (key in marks) {
  console.log(marks[key]);
}

// Q3 Print "Try again" until user enter correct number
let ent_num = prompt("Enter a number");
ent_num = Number.parseInt(ent_num);
let num = 12;
while (num != ent_num) {
  console.log("Try again");
  let num = prompt("Enter a number");
}
console.log(ent_num + "is a correct number");

// Q5 Find the mean of 5 number
const mean = (a, b, c, d, e) => {
  return a + b + c + d + e / 5;
};
console.log(mean(3, 4, 5, 2, 1));
