// function sayHello() {
//   console.log("Hello World");
// }

// sayHello();
// ====================================================
// function sum(a, b) {
//   console.log(a + b);
// }

// sum(5, 10);
// ===================================================
// function multiply(a, b) {
//   return a * b;
//   console.log("This will not be executed");
// }
// ====================================================
// multiply(2,6);
// console.log(multiply(2,6));
// // of
// let result = multiply(4,10);
// console.log(result);
// ==========================================================
// function double(num) {
//   return num * 2;
// }

// let myNumber = double(5);
// console.log(myNumber);
// =========================================================
// function calculateTotal(price, count) {
//   let total = price * count;
//   return total;
// }

// let total = calculateTotal(50, 3);
// console.log(total);
// ====================================================
// function calculateSale(price, count) {
//   let total = price * count;

//   if (total > 100) {
//     let discount = total * 0.1;
//     return total - discount;
//   } else {
//     return total;
//   }
// }

// console.log(calculateSale(50, 3));
// console.log(calculateSale(20, 2));
// =====================================================
// arrow function

// const double = (n) => n * 2;

// const sum = (a, b) => {
//   return a + b;
// };

// console.log(sum(5, 6));
// ===================================================

// const sum2 = (a, b) => a + b;
// console.log(sum2(8, 9));
// ===================================================

// function isEven(number) {
//   if (number %2 === 0) {
//     return console.log("Це число парне");
//   }else {
//     return confirm("Це число непарне");
//   }
// }

// console.log(isEven(8));  // Має бути "Це число парне"
// console.log(isEven(7));  // Має бути "Це число непарне"
// =======================================================
// const isEven = (number) => {
//   if (number % 2 === 0) {
//     return "Це число парне";
//   } else {
//     return "Це число непарне";
//   }
// };

// console.log(isEven(10)); // Має бути "Це число парне"
// console.log(isEven(9)); // Має бути "Це число непарне"
// =========================================================
// Масиви (Arrays) 📚
let fruits = ["Яблуко", "Банан", "Апельсин"];
console.log(fruits.length);

let tasks = ["Learn JS", "Drink coffee"];
tasks.push("Go to the gym");
console.log(tasks);
