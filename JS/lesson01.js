// Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total);
// const diff = apples - grapes;
// console.log(diff);

// Заміни вираз перевизначення комбінованим оператором `+=`.

// let students = 100;
// students += 50;
// students -= 10;
// console.log(students);

// ## Example 3 - Пріоритет операторів

// Розбери пріоритет операторів в інструкції привласнення значення змінної
// `result`.

// const result = 108 + 223 - 2 * 5;
// console.log(result);

// ## Example 4 - Клас Math

// Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. значення
// змінної `value`. Використовуй методи `Math.floor()`, `Math.ceil()` та
// `Math.round()`. Перевір що буде в консолі при значеннях `27.3` та `27.9`.

// const value = 27.5;
// console.log(Math.floor(value));
// console.log(Math.ceil(value));
// console.log(Math.round(value));

// ## Example 5 - Шаблонні рядки

// Склади фразу за допомогою шаблонних рядків `A has B bots in stock`, де A, B -
// змінні вставлені в рядок.

// const companyName = "Cyberdyne Systems";
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// ## Example 6 - Методи рядків та чейнінг

// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього
// необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.

// Вага та висота зберігаються у змінних `weight` та `height`, але не як числа, а в
// вигляді рядків (спеціально для завдання). Не цілі числа можуть бути задані у вигляді
// `24.7` або `24,7`, тобто як роздільник дробової частини може бути
// кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// let weight = "88,3";
// let height = "1.75";
// var1
// weight = Number(weight.replace(",", "."));
// height = Number(height.replace(",", "."));

// const bmi = Number((weight / Math.pow(height, 2)).toFixed(1));
// console.log(bmi); // 28.8
// var2
// 1. find index comma
// 2. copy number next comma
// 3. склеїмо цілу част та дріб розд (.)

// const commaIndex = weight.indexOf(",");

// const valueAfterComma = weight.slice(commaIndex + 1);
// const valueBeforeComma = Number.parseInt(weight);

// weight = +`${valueBeforeComma}.${valueAfterComma}`;
// console.log(weight);

// const bmi = Number((weight / Math.pow(height, 2)).toFixed(1));
// console.log(bmi); // 28.8

// console.log(5 % 3);

// ## Example 7 - Оператори порівняння та приведення типів

// Яким буде результат виразів?

// console.log(5 > 4); // true

// console.log(10 >= '7'); // true

// console.log('2' > '12'); // true unicode

// // console.log("2".charCodeAt()); unicode

// console.log('2' < '12'); // false

// console.log('4' == 4); // true

// console.log('6' === 6); //false

// console.log('false' === false);//false

// console.log(1 == true); //true

// console.log(1 === true); //false

// console.log("0" == false); //true

// console.log("0" === false); //false

// console.log("Papaya" < "papaya"); //true

// console.log("Papaya" === "papaya"); //false

// console.log(undefined == null); //true

// console.log(undefined === null); //false

// ## Example 8 - Логічні оператори

// Яким буде результат виразів?

// ```js
// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log((1 && null && 2) > 0);

// console.log(null || (2 && 3) || 4);
// ```

// ## Example 9 - Значення за замовчуванням та оператор нульового злиття

// Отрефактори код так, щоб у змінну `value` присвоювалося значення
// змінної `incomingValue`, якщо воно не рівне `undefined` або `null`. В
// іншому випадку має присвоюватися значення `defaultValue`. Перевір роботу
// скрипта для наступних значень змінної `incomingValue`: null, undefined, 0,
// false. Використовуй оператор `??` (nullish coalescing operator).

// ```js
// const incomingValue = 5;
// const defaultValue = 10;
// const value = incomingValue || defaultValue;
// console.log(value);
// ```

// ## Example 10 - Оператор % та методи рядків

// Напиши скрипт, який переведе значення `totalMinutes` (кількість хвилин) в
// рядок у форматі годин та хвилин `HH:MM`.

// - 70 покаже 01:10
// - 450 покаже 07:30
// - 1441 покаже 24:01

// ```js
// const totalMinutes = 70;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);
// ```

//41
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     //     if (this.potions.includes(newPotion)) {
//     //       return `Error! Potion ${newPotion} is already in your inventory!`;
//     //     }
//     //     this.potions.push(newPotion);
//     //   },
//     for (const iterator of this.potions) {
//       if (iterator.name === newPotion.name)
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       //   console.log(
//       //     `Error! Potion ${newPotion.name} is already in your inventory!`
//       //   );
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     let i = 0;
//     for (const iterator of this.potions) {
//       if (iterator.name === potionName) {
//         this.potions.splice(i, 1);
//         return;
//       }
//       i++;
//     }
//     return `Potion ${potionName} is not in inventory!`;

//     //   const potionIndex = this.potions.indexOf(potionName);
//     //     if (potionIndex === -1) {
//     //      return `Potion ${potionName} is not in inventory!`;
//     //      }

//     //     // this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     for (const iterator of this.potions) {
//       if (iterator.name === oldName) {
//         iterator.name = newName;
//         console.log(this.potions);
//         return;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // const potionIndex = this.potions.indexOf(oldName);

//   // if (potionIndex === -1) {
//   //   return `Potion ${oldName} is not in inventory!`;
//   // }

//   // this.potions.splice(potionIndex, 1, newName);
//   //   },
//   // Change code above this line
// // };
// // atTheOldToad.getPotions();
// // console.table(atTheOldToad.potions);
// // atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
// // console.table(atTheOldToad.potions);
// // atTheOldToad.addPotion({ name: "Power potion", price: 270 });
// // console.table(atTheOldToad.potions);

// // atTheOldToad.addPotion({ name: "Dragon breath", price: 700 });
// // console.table(atTheOldToad.potions);

// // atTheOldToad.addPotion({ name: "Stone skin", price: 240 });
// console.table(atTheOldToad.potions);

// atTheOldToad.removePotion("Dragon breath");
// console.table(atTheOldToad.potions);

// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// console.table(atTheOldToad.potions);

// Значення властивості atTheOldToad.removePotion - це метод об'єкта
// Для вихідного об'єкта після виклику методу atTheOldToad.removePotion("Dragon breath"), у властивості potions буде масив [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]
// Для вихідного об'єкта після виклику методу atTheOldToad.removePotion("Speed potion"), у властивості potions буде масив [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]
// Значення властивості atTheOldToad.updatePotionName - це метод об'єкта
// Для вихідного об'єкта після виклику методу  у властивості potions буде масив [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
// Для вихідного об'єкта після виклику методу atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"), у властивості potions буде масив [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const iterator of this.potions) {
//       if (iterator.name === newPotion.name)
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     let i = 0;
//     for (const iterator of this.potions) {
//       if (iterator.name === potionName) {
//         this.potions.splice(i, 1);
//         return;
//       }
//       i++;
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     for (const iterator of this.potions) {
//       if (iterator.name === oldName) {
//         iterator.name = newName;
//         console.log(this.potions);
//         return;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   //   for (let i = 0; i < orderedItems.length; i += 1) {
//   //     totalPrice += orderedItems[i];
//   //   }
//   orderedItems.forEach((el) => (totalPrice += el));

//   // Change code above this line
//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
// Change code below this line

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       filteredNumbers.push(numbers[i]);
//     }
//   }

//   numbers.forEach((number) => {
//     if (number > value) filteredNumbers.push(number);
//   });

//   // Change code above this line
//   return filteredNumbers;
// }

// filterArray([1, 2, 3, 4, 5], 3);
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// filterArray([1, 2, 3, 4, 5], 4);
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// filterArray([1, 2, 3, 4, 5], 5);
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// filterArray([12, 24, 8, 41, 76], 38);
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// filterArray([12, 24, 8, 41, 76], 20);
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   //   for (let i = 0; i < firstArray.length; i += 1) {
//   //     if (secondArray.includes(firstArray[i])) {
//   //       commonElements.push(firstArray[i]);
//   //     }
//   //   }

//   firstArray.forEach((arr) => {
//     if (secondArray.includes(arr)) commonElements.push(arr);
//   });

//   return commonElements;
//   // Change code above this line
// }

// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]); // повертає [12, 27, 3]

// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]); // повертає [10, 30, 40]

// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
// getCommonElements([1, 2, 3], [10, 20, 30]);
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;
//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });
//   return totalPrice;
// };
// calculateTotalPrice([412, 371, 94, 63, 176]);
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// Change code below this line
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) filteredNumbers.push(number);
//   });

//   // Change code above this line
//   return filteredNumbers;
// };

// filterArray([12, 24, 8, 41, 76], 20); // [24, 41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];
//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) commonElements.push(element);
//   });
//   return commonElements;
// };

// // Change code above this line

// getCommonElements([1, 2, 3], [2, 4]);
// console.log(getCommonElements([1, 2, 3], [2, 4]));
