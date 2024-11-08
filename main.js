/* Variables : var * let * const */

// const x = 20;
// console.log(x);
// x = 25;
// console.log(x);

// var x = 20;
// console.log(x);
// var x = 25;
// console.log(x);

// let x = 20;
// console.log(x);
// x = 25;
// console.log(x);

// console.log(x);
// var x = 20;

// console.log(x);
// let x = 20;

// console.log(x);
// const x = 20;

// var x = 2;
// if (x == 2) {
//   //   var age = 20;
//   // let age = 20;
//   const age = 20;
//   console.log(age);
// }
// console.log(age);

/* Arrow function */

// let test1 = function () {
//   return 5;
// };
// console.log(test1());

// let arrowTest = () => {
//   return 5;
// };
// let arrowTow = () => (5 > 0 ? true : false);
// console.log(arrowTest());
// console.log(arrowTow());

// let arrowTest3 = function (n) {
//   return n * 2;
// };
// let arrowTest3 = (n) => n * 2;
// let arrowTest3 = n => n * 2;
// console.log(arrowTest3(20));

/* String Methods */

// const title = "Jack and Jill Went Up the Hill";

// console.log(title.startsWith("Jack"));
// console.log(title.startsWith("jack"));
// console.log(title.startsWith("Jill", 12));

// console.log(title.endsWith("Hill"));
// console.log(title.endsWith("hill"));
// console.log(title.endsWith("Up", 10));

// let email = "admin@example.com";
// console.log(email.includes("@"));

// let str = "JavaScript String";
// console.log(str.includes("Script"));
// console.log(str.includes("script"));
// console.log(str.includes("Script", 4));
// console.log(str.repeat(4));

/* Template Literals */

// const myName = "Meriem";
// let perviously =
//   "Hello wordl, I am" +
//   " " +
//   myName +
//   " \n" +
//   "Have a nice day \n" +
//   "I wish you the best";

// let now = `Hello
//  world,
//  I am ${myName}
// Have a nice day I wish you the best`;

// console.log(perviously);
// console.log(now);

/* Spread Operator ... */

// let array1 = [1, 2, 3, 4],
//   array2 = [5, 6, 7];
// // console.log(array1.concat(array2));

// let allArrays = [...array1, ...array2];
// console.log(allArrays);

// function sum(x, y, z) {
//   return x + y + z;
// }
// const numbers = [1, 2, 3];
// // console.log(sum(1,2,3))
// console.log(numbers);
// console.log(...numbers);
// console.log(sum(...numbers));

/* Array Methodes */

// let array = [15, 24, 15, 26, 1, 8, 45];
// console.log(array);

// let array1 = array.map((el) => el * 2);
// console.log(array1);
// let array2 = array.filter((el, i) => el > 20);
// console.log(array2);
// let array3 = array.reduce((acc, cur) => acc + cur);
// console.log(array3);
// let array4 = array.find((el) => el > 20);
// console.log(array4);
// let array5 = array.findIndex((el) => el > 25);
// console.log(array5);

/* Destructuring */

// const contact = {
//   firstName: "Jhon",
//   lastName: "Doe",
//   age: "26",
//   city: "London",
//   email: "jhon@gmail.com",
// };
// const { firstName, age, city } = contact;
// console.log(
//   `My name is: ${firstName}, My age is: ${age} and I am from ${city}`
// );

/********* Ternary Operator **********/

// let x = 11;
// if (x > 10) {
//   console.log("is greater than 10");
// } else {
//   console.log("is greater less 10");
// }

// Condition ? If true : If false

// x > 10 ? console.log("is greater than 10") : console.log("is greater less 10");
// heart.style.color === "red"
//   ? (heart.style.color = "black")
//   : (heart.style.color = "red");

/******* Modules *******/

import { a, tab, sum } from "./module.js";

console.log(a);
console.log(tab);
console.log(sum(5, 9));
