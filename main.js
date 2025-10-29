//todo Variables : var * let * const */

// const x = 20;
// console.log(x);
// x = 25;
// console.log(x);

// var x = 20;
// console.log(x);
// var x = true;
// console.log(x);

// let x = 20;
// console.log(x);
// x = "bonjour";
// console.log(x);

// console.log(x);
// var x = 20;

// // // console.log(x);
// let x = 2;
// console.log("x:", x);

// let age = 10;
// for (let i = 0; i < 1; i++) {
// let age = 3;
// console.log("age:", age);
// var x = 2;
// if (x == 2) {
// let age = 50;
// age = 20;
// let age = 20;
// console.log(age);
// }

// console.log("age dans la boucle", age);
// }
// console.log("age endehors de la boucle", age);
// console.log(x);

// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }
// console.log(i);
//todo Arrow function */

// let test1 = function () {
//   return 5;
// };
// console.log(test1());

// let arrowTest = () => {
//   return 5;
// };
// let arrowTest1 = () => 5;

// console.log(arrowTest1());

// let arrowTest = () => (5 > 25 ? true : false);
// 5 > 0 ? true : false;

// if (5 > 0) {
//   return true;
// } else {
//   return false;
// }

// console.log(arrowTest());
// console.log(arrowTow());

// let arrowTest = function (n) {
//   return n * 2;
// };
// let arrowTest1 = (n) => n * 2;
// let arrowTest3 = (n) => n / 2;
// console.log(arrowTest3(20));
// btn.addeventListener('click', () => {

// })

//todo String Methods */

const title = "Jack and Jill Went Up the Hill";

// console.log(title.startsWith("Jack"));
// console.log(title.startsWith("jack"));
// console.log(title.startsWith("and", 5));

// console.log(title.endsWith("Hill"));
// console.log(title.endsWith("hill"));
// console.log(title.endsWith("Up", 21));

// let email = "admin@example.com";
// console.log(email.includes("co"));

// let str = "JavaScript";
// console.log(str.includes("Script"));
// console.log(str.includes("script"));
// console.log(str.includes("Script", 4));
// console.log(str.repeat(4));
// console.log(str.slice());
//*! Template Literals */

// const myName = "Meriem";
// let perviously =
//   "Hello wordl," +
//   " \n" +
//   "\n" +
//   "I am" +
//   " " +
//   myName +
//   " \n" +
//   "Have a nice day \n" +
//   "I wish you the best";
// // backtecks: algr + 7; ``
// let now = `Hello world,

//  I am
//         ${myName}
// Have a nice day I wish
//       you the best`;

// console.log(perviously);
// console.log(now);

//*! Spread Operator ... */
// let chaine = "";
// let array1 = [1, 2, 3, 4],
//   array2 = [5, 6, 7];
// console.log(array1.concat(array2));

// let allArrays = [...array1, ...array2];
// console.log(allArrays);
// console.log([1, 5, ...allArrays, 0]);
// console.log([...array1, 5]);

// console.log(allArrays);
// function sum(x, y, z) {
//   return x + y + z;
// }
// const numbers = [1, 2, 3];
// console.log(sum(1, 2, 3));
// console.log(numbers);
// console.log(...numbers);
// console.log(sum(...numbers));
// console.log([...numbers, 4]);
//*! Array Methodes */

// let array = [10, 20, 15, 20, 1, 4];
// console.log(array);

// let array2 = array.map((elt) => elt * 2);
// let array1 = [1, 2, 3, 4];

// array1.forEach((el, index, arr) => {
//   arr[index] = el * 2;
// });

// console.log(array1); // [2, 4, 6, 8] — maintenant modifié
// console.log(array);
// let array2 = array.filter((x) => x <= 20);
// console.log(array2);
// let array3 = array.reduce((acc, cur) => acc + cur, 0);
// console.log(array3);
// let array4 = array.find((el) => el > 20);
// console.log(array4);
// let array5 = array.findIndex((el) => el > 25);
// console.log(array5);

//!Destructuring */

// const contact = {
//   firstName: "Jhon",
//   lastName: "Doe",
//   age: "26",
//   city: "London",
//   email: "jhon@gmail.com",
// };
// let { firstName, age, city } = contact;
// // // // firstName = "foulan";
// console.log(
//   `My name is: ${firstName}, My age is: ${age} and I am from ${city}`
// );

//!Ternary Operator */
//
// let x = 2;
// if (x > 10) {
//   console.log("is greater than 10");
// } else {
//   console.log("is  less than 10");
// }

// // // Condition ? If true : If false

// x > 10 ? console.log("is greater than 10") : console.log("is greater less 10");

// // heart.style.color === "red"
// //   ? (heart.style.color = "black")
// //   : (heart.style.color = "red");
// if (x > 10) {
//   console.log("is greater than 10");
// }
// x > 10 ? console.log("is greater than 10") : null; //ya pas de else

// //! Modules*/

import { a, tab, sum } from "./module.js";

console.log(a);
console.log(tab);
console.log(sum(5, 9));
