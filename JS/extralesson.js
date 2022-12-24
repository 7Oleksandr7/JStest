// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   return { completed, category, priority, ...data };
// }
// console.table(
//   makeTask({
//     category: "Homemade",
//     priority: "Low",
//     text: "Take out the trash",
//   })
// );
// console.table(makeTask({ category: "Finance", text: "Take interest" }));
// console.table(makeTask({ priority: "Low", text: "Choose shampoo" }));
// console.table(makeTask({ text: "Buy bread" }));

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       console.log(this.potions[i].name);
//       if (this.potions[i].name === potionName) {
//         this.potions.splice(i, 1);
//         return;
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
// };
// console.log(updatePotionName("Dragon breath", "Polymorth"));

// Створити функцію яка буде приймати 2 параметра.
// 1 Масив студентів.
// 2 Мову програмування яку потрібно знайти.
// Функція повертає масив імен користувачів які вивчають цю мову.

// const students = [
//   {
//     name: `Lika`,
//     language: `html`,
//   },
//   {
//     name: `Anton`,
//     language: `css`,
//   },
//   {
//     name: `Andriy`,
//     language: `js`,
//   },
//   {
//     name: `Vova`,
//     language: `html`,
//   },
//   {
//     name: `Alina`,
//     language: `css`,
//   },
//   {
//     name: `Egor`,
//     language: `js`,
//   },
//   {
//     name: `Aleksandr`,
//     langunage: `html`,
//   },
//   {
//     name: `Taras`,
//     language: `css`,
//   },
//   {
//     name: `Ivan`,
//     language: `js`,
//   },
//   {
//     name: `Make`,
//     language: `html`,
//   },
// ];

// function getArrNames(students, searchLanguage) {
//   const Arr = [];
//   for (const student of students) {
//     console.log(student);
//     if (student.language === searchLanguage) Arr.push(student.name);
//   }
//   return Arr;
// }
// getArrNames(students, "html");
// console.log(getArrNames(students, "html"));

// // Порахувати скільки ззаробив кожен  юзер
// // (функція приймає 2 параметри
// // 1 параметр масив
// // 2 параметр імя робітника
// // Функція повертає скільки він заробив (salary*month) )

// // Порахувати загальну суму заробітку всіх робітників()
// // (функція приймає 1 параметр масив, і повертає загальну суму заробітку всіх робітників);

// const workers = [
//   {
//     name: "Alex",
//     salary: 3500,
//     month: 12,
//   },
//   {
//     name: "Dima",
//     salary: 2500,
//     month: 9,
//   },
//   {
//     name: "Oleg",
//     salary: 1500,
//     month: 36,
//   },
// ];

// function userSalary(workers, userName) {
//   const { salary, month } = workers.find(({ name }) => name === userName);
//   console.log(salary, month);
//   return salary * month;
// }
// userSalary(workers, "Dima");
// console.log(userSalary(workers, "Dima"));

// function totalUserSalary(workers) {
//   //     const result = workers.reduce((acc, elem) => {
//   // return acc + elem.salary * elem.month
//   //     }, 0)
//   //     return result
//   return workers.reduce((acc, { salary, month }) => acc + salary * month, 0);
// }
// console.log(totalUserSalary(workers));

// function totalUserSalary(workers) {
//   return workers.reduce((acc, { salary, month }) => acc + salary * month, 0);

//   //   const result = workers.reduce((acc, elem) => {
//   //     return acc + elem.salary * elem.month
//   // }, 0)
//   //   return result;
// }
// console.log(totalUserSalary(workers));

// 1 Створити функцію яка буде приймати 2 параметри
//    1 параметр масив
//    2 параметр назва книги
// Функція повертає Імена юзерів (формат стрінги) в яких є ця книга ("Harry Potter") \\\ "Anna, Oleksii"

// 2 Порахувати вік всіх юзерів у яких є ключ age.

// const friends = [
//   { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
//   { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
//   { name: "Alice", books: ["War and peace", "Romeo and Juliet"] },
//   {
//     name: "Oleksii",
//     books: ["Bible", "War and peace", "Harry Potter", "Romeo and Juliet"],
//     age: 26,
//   },
// ];
// // function getUsersName(friends, bookName) {
// //   const users = friends.filter(({ books }) => books.includes(bookName));
// //   return users;
// // }

// function getTotalAge(friends) {
//   const ages = friends.reduce((acc, { age }) => (acc += age ? age : 0), 0);
//   console.log(ages);
// }
// console.log(getTotalAge(friends));

// Створити функцію яка приймає 1 параметр масив продуктів і повертає мутований
// масив
// Потрібно перебрати масив і якщо він має об'єкти в яких дублюються айді
// то квонтіті цих елементів потрібно сплюсувати
// а ті обє'кти в яких айді співпав видалити з масиву.
// (Потрібно мутувати масив, створювати новий не потрібно)

// const products = [
//   {
//     id: "sku1",
//     qty: 1,
//   },
//   {
//     id: "sku2",
//     qty: 2,
//   },
//   {
//     id: "sku3",
//     qty: 3,
//   },
//   {
//     id: "sku1",
//     qty: 6,
//   },
//   {
//     id: "sku1",
//     qty: 8,
//   },
//   {
//     id: "sku2",
//     qty: 19,
//   },
//   {
//     id: "sku4",
//     qty: 1,
//   },
// ];

// function deleteDublicateProducts(products) {
//   for (let i = 0; i < products.length; i += 1) {
//     for (let j = i + 1; j < products.length; j += 1) {
//       if (products[i].id === products[j].id) {
//         products[i].qty += products[j].qty;
//         products.splice(j, 1);
//         j -= 1;
//       }
//     }
//   }
//   return products;
// }
// console.log(deleteDublicateProducts(products));

// // // Реалізуйте клас Student, який успадковуватиметься від класу User. Цей клас повинен мати такі властивості:
// // // name приватна властивість (ім'я, успадковується від User),
// // // surname приватна властивість (прізвище, успадковується від User),
// // // year (рік вступу до вузу).
// // // Клас повинен мати метод getFullName() (успадковується від User), за допомогою якого можна вивести одночасно ім'я та прізвище студента.
// // // Також клас повинен мати метод getCourse(), який виводитиме поточний курс студента (від 1 до 5, якщо значення перевищує 5  курс виводити що студент являєтсья випускником).
// // // Курс обчислюється так: потрібно від поточного року відняти рік вступу до вузу. Поточний рік отримаєте самостійно (читати документацію!!!).
// // // Приклад ініціалізації екземпляру класа:
// // // const student = new Student('Петрик', 'Пяточкин', 2019);

// // // student.getFullName(); //поверне 'Петрик Пяточкин'
// // // student.getCourse();   //поверне 3 (третій курс)

// class User {
//   static counter = 0;
//   static addUser() {
//     this.counter += 1;
//     console.log(this.counter);
//   }
//   #name;
//   #surname;
//   constructor(name, surname) {
//     this.#name = name;
//     this.#surname = surname;
//     User.addUser();
//   }
//   getFullName() {
//     return `${this.#name} ${this.#surname}`;
//   }
// }
// class Student extends User {
//   constructor(name, surname, year) {
//     super(name, surname);
//     this.year = year;
//   }
//   getCourse() {
//     let today = new Date();
//     let currentYear = today.getFullYear();
//     let course = currentYear - this.year;
//     if (course >= 5) {
//       return `студент ${this.getFullName()} являєтсья випускником`;
//     }
//     return course;
//   }
// }
// const student = new Student("Петрик", "Пяточкин", 2015);
// console.log(student);
// student.getFullName(); //поверне 'Петрик Пяточкин'
// console.log(student.getFullName());
// student.getCourse(); //поверне 3 (третій курс)
// console.log(student.getCourse());

// const student1 = new Student("Пет", "Пят", 2016);
// const student2 = new Student("Петh", "Пятg", 2017);
// const user = new User("Петh", "Пятg");
// const user1 = new User("we", "jk");

//лічильник рахує скільки раз створений екземпляр класу User, Student
// const cars = [
//   {
//     car: "Honda",
//     type: "Civic",
//     price: 12000,
//   },
//   {
//     car: "Audi",
//     type: "Q7",
//     price: 40000,
//   },
//   {
//     car: "BMW",
//     type: "5 siries",
//     price: 9000,
//   },
//   {
//     car: "Honda",
//     type: "Accord",
//     price: 20000,
//   },
//   {
//     car: "Volvo",
//     type: "XC60",
//     price: 7000,
//   },
// ];

// function getChippestCar(Arr) {
//   Arr.sort((a, b) => a.price - b.price);
//   console.log(Arr);
//   return Arr[0];
// }
// getChippestCar(cars);
// console.log(getChippestCar(cars));

// const nameCar = prompt().toLowerCase();
// function searchCar(Arr, nameCar) {
//   const result = Arr.filter((car) =>
//     car.car.toLowerCase().includes(nameCar)
//   ).map(({ car }) => car);
//   return result;
// }
// console.log(searchCar(cars, nameCar));

// є рядок в якому довільна кількість літер, гарантовано в рядку немає пробілів та роздільних знаків, потрібно повернути об'єкт де кожна літера буде ключем, а кількість раз яку вона дублюється буде визначеням ключа

// const str = "absdabsrgbadgtdswwbetflg";
// //результат на який очікуємо
// // const obj = {
// //   a: 3,
// //   b: 4,
// //   s: 2,
// //...
// // };

// const letters = str.split("").reduce((acc, item) => {
//   if (!acc.hasOwnProperty(item)) {
//     acc[item] = 1;
//   } else {
//     acc[item] += 1;
//   }
//   return acc;
// }, {});
// console.log(letters);

// const students = [
//   {
//     name: "Манго",
//     score: 83,
//   },
//   {
//     name: "Полі",
//     score: 59,
//   },
//   {
//     name: "Аякс",
//     score: 37,
//   },
//   {
//     name: "Ківі",
//     score: 94,
//   },
// ];

// const scoreSum = students.reduce((acc, student) => {
//   return (acc += student.score);
// }, 0);
// console.log(scoreSum);

// const sudentNames = students.reduce((acc, student) => {
//   console.log(student.name);
//   acc.push(student.name);
//   return acc;
// }, []);
// console.log(sudentNames);

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// const getNameTime = players.reduce((acc, player) => {
//   const time = player.playtime / player.gamesPlayed;
//   const object = {
//     name: player.name,
//     time,
//   };
//   acc.push(object);
//   return acc;
// }, []);
// console.log(getNameTime);

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// // Назва акумулятора може бути довільною, це просто параметр функції
// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);
// console.log(totalScore);

// const averageScore = totalScore / students.length;
// console.log(averageScore);
