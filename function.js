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
function calculateSale(price, count) {
  let total = price * count;

  if (total > 100) {
    let discount = total * 0.1;
    return total - discount;
  } else {
    return total;
  }
}

console.log(calculateSale(50, 3));
console.log(calculateSale(20, 2));
