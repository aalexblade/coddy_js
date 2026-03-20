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
// =====================push====================================
// Масиви (Arrays) 📚
// let fruits = ["Яблуко", "Банан", "Апельсин"];
// console.log(fruits.length);

// let tasks = ["Learn JS", "Drink coffee"];
// tasks.push("Go to the gym");
// tasks.push("Read a book");
// console.log(tasks);
// ====================unshift====shift=================================
// unshift("fruit") — додає елемент на початок масиву (індекс 0).
// shift() — видаляє перший елемент.

// let fruits = ["Apple", "Banana", "Orange"];

// fruits.unshift("Strawberry");
// fruits.push("Grapes");
// console.log(fruits); // ['Strawberry', 'Apple', 'Banana', 'Orange', 'Grapes']
// console.log(fruits.length - 1); // 4
// console.log(fruits[fruits.length - 1]); // Завжди виведе останній елемент
// ===========================Loops==============================
// for...of

// let fruits = ["Apple", "Banana", "Orange"];

// for (let fruit of fruits) {
//   console.log("I want to eat " + fruit);
// }
// =========================================================
// let prices = [100, 250, 80, 150];

// function showPrices(arr) {
//   for (let price of arr) {
//     console.log("Price: " + price);
//   }
// }
// showPrices(prices);
// =========================================================
// let prices = [50, 150, 30, 200, 450];

// function calculateExpensiveTotal(pricesArr) {
//   let sum = 0;

//   for (let price of pricesArr) {
//     if (price > 100) {
//       console.log("Expensive item found: " + price);
//       sum += price;
//     }
//   }

//   return sum;
// }

// let result = calculateExpensiveTotal(prices);
// console.log("Final sum: " + result);

// ========================Shopping Cart=======================================
// const cart = [10, 25, 40, 5, 100]; // Ціни товарів

// function processOrder(prices) {
//   // 1. Перевірка: якщо масив порожній (довжина 0),
//   // поверни рядок "Your cart is empty!"
//   if (prices.length === 0) {
//     return "Your cart is empty!";
//   }

//   let total = 0;

//   // 2. Використай цикл for...of, щоб додати кожну ціну до total
//   for (let price of prices) {
//     total += price;
//   }

//   // 3. Додай 5% податку до total
//   // Підказка: total = total * 1.05;
//   total = total * 1.05;

//   return "Final price with tax: " + total;
// }

// console.log(processOrder(cart));
// console.log(processOrder([])); // Перевірка порожнього кошика

// ======================Objects===================================
// const cart = [
//   { name: "Milk", price: 30 },
//   { name: "Bread", price: 20 },
//   { name: "Cheese", price: 100 },
// ];

// let total = 0;

// for (let item of cart) {
//   console.log("Adding: " + item.name); // Дістаємо назву
//   total += item.price; // Дістаємо ціну і додаємо до суми
// }
// console.log("Total sum: " + total);

// =========================================================
// let user = {
//   name: "Ivan",
//   isPremium: true, // Чи є у нього преміум-підписка?
// };

// function greetUser(person) {
//   if (person.isPremium === true) {
//     return `Welcome, ${person.name} !`;
//   } else {
//     return `Hello, ${person.name}! Upgrade to Premium for discounts.`;
//   }
// }

// console.log(greetUser(user)); // Має вивести: "Hello, Ivan! Upgrade to Premium for discounts."
// =========================================================
// let laptop = {
//   model: "MacBook",
//   price: 1000,
// };

// laptop.price += 200; // Оновлюємо ціну
// laptop.color = "Silver"; // Додаємо нову властивість
// laptop["brand"] = "Apple"; // Додаємо ще одну властивість
// console.log(laptop); // Виведе: { model: 'MacBook', price: 1200 }

// =========================================================
// let users = [
//   { name: "Ivan", isPremium: true },
//   { name: "Oksana", isPremium: false },
//   { name: "Anton", isPremium: true },
// ];

// // Наша функція-"обробник" для однієї людини
// function greetUser(person) {
//   if (person.isPremium) {
//     return `Welcome, ${person.name}! Enjoy your 50% discount.`;
//   } else {
//     return `Hello, ${person.name}! Upgrade to Premium for discounts.`;
//   }
// }

// // // Твій цикл, але з використанням функції
// // for (let user of users) {
// //   let message = greetUser(user); // Функція обробляє поточного користувача
// //   console.log(message);          // Виводимо гарний текст
// // }

// users[1].isPremium = true; // Оксана тепер преміум

// for (let user of users) {
//   if (user.isPremium === true) {
//     console.log("Premium member: " + user.name);
//   }
// }

// =========================================================
// let products = [
//   { name: "Laptop", price: 1000 },
//   { name: "Mouse", price: 50 },
//   { name: "Keyboard", price: 80 },
// ];

// for (let product of products) {
//   if (product.price > 100) {
//     product.price = product.price * 0.9; // Додаємо 10% до ціни
//     console.log(`SALE: ${product.name} costs only ${product.price}`);// Виводимо оновлену ціну
//   }
// }

// console.log(products); // Виведе оновлений масив з новими цінами
// ========================Filter=================================

// let products = [
//   { name: "Laptop", price: 1000 },
//   { name: "Mouse", price: 50 },
//   { name: "Keyboard", price: 80 },
//   { name: "Monitor", price: 300 }
// ];

// console.log("--- Items with discount ---");

// for (let product of products) {
//   if (product.price > 100) {
//     product.price = product.price * 0.9;
//     // Цей рядок спрацює ТІЛЬКИ для Laptop та Monitor
//     console.log(`SALE: ${product.name} costs only ${product.price}`);
//   }
// }

// // Створюємо новий масив, де будуть ТІЛЬКИ дорогі товари
// let expensiveProducts = products.filter(product => product.price > 100);

// console.log(expensiveProducts); 
// // Виведе масив тільки з Laptop та Monitor
// =======================filter==================================

// let tasks = [
//   { title: "Buy milk", isDone: true },
//   { title: "Learn JavaScript", isDone: false },
//   { title: "Workout", isDone: false },
//   { title: "Call Mom", isDone: true }
// ];

// // if (tasks.isDone === true) {
// //   console.log("Task is completed: " + tasks.title);
// // }
// // for(let task of tasks) {
// //   if(task.isDone === true) {
// //     console.log("Task is completed: " + task.title);
// //   } 
// // }

// // console.log(tasks);
// tasks[1].isDone = true;
// const completedTasks = tasks.filter(task => task.isDone === true);
// console.log(completedTasks);
// =========================Map==================================
let tasks = [
  { title: "Buy milk", isDone: true },
  { title: "Learn JavaScript", isDone: false },
  { title: "Workout", isDone: false },
  { title: "Call Mom", isDone: true }
];
const taskTitles = tasks.map(task => task.title);

console.log(taskTitles); 
// Виведе: ["Buy milk", "Learn JavaScript", "Workout", "Call Mom"]

const statusList = tasks.map(task => {
  if (task.isDone) {
    return "✅ " + task.title;
  } else {
    return "❌ " + task.title;
  }
});

console.log(statusList);