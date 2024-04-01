// Chapter 2

// Q1 use logical operator
let age = prompt("Enter age");
if (10 < age < 20) {
  console.log("Age is valid");
} else {
  console.log("Age is invalid");
}

// Q2 switch case statement
let a = "vijay";
switch (a) {
  case "vijay":
    console.log("friday" + a);
    break;
  case "ajay":
    console.log("wednesday" + a);
    break;
  case "sandeep":
    console.log("tuesday" + a);
    break;
  case "monday":
  default:
    console.log("monday" + a);
}

// Q3 divided by 2 and 3
let number = 6; //prompt("Enter a number");
if (number % 2 == 0 && number % 3 == 0) {
  console.log(number + "is divide by 2 and 3");
} else {
  console.log(number + "is not divide by 2 and 3");
}

// Q4 number divided by either 2 or 3
let num = 9; //prompt("Enter a number");
if (num % 2 == 0 || num % 3 == 0) {
  console.log(num + "is divide by 2 and 3");
} else {
  console.log(num + "is not divide by 2 nor 3");
}

// Q5 Ternary operator
let drive_age = 17; //prompt("Enter age");
let beverage = drive_age > 18 ? "You can drive" : "You cannot drive";
console.log(beverage); // "Beer"
