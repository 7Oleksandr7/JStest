// const arr = [1, 2, 64, 4, 22, 98, 44, 22, 33];

// // console.table(arr.sort((a, b) => a - b));
// // console.table(arr.sort((a, b) => b - a));

// const arrSum = arr.reduce((acc, el, i) => {
//   console.log(i, acc, el);
//   return acc + el;
// }, 0);

// console.log(arrSum);

// const arr = ["Katya", "TARAS", "nastya", "aLonYa", "ALEX,", "BogDan"];

// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.map((el) => el ** 2);

// console.log(arr);
// console.log(newArr);

// const students = [
//   {
//     name: "Alex",
//     subjects: ["Chemistry", "Computer Sience"],
//   },
//   {
//     name: "Anastasia",
//     subjects: ["PE", "Physics"],
//   },
// ];
// const cars = [
//   {
//     make: "Honda",
//     model: "CR-V",
//     type: "suv",
//     amount: 14,
//     price: 24045,
//     onSale: true,
//   },
//   {
//     make: "Honda",
//     model: "Accord",
//     type: "sedan",
//     amount: 2,
//     price: 22455,
//     onSale: true,
//   },
//   {
//     make: "Mazda",
//     model: "Mazda 6",
//     type: "sedan",
//     amount: 8,
//     price: 24195,
//     onSale: false,
//   },
//   {
//     make: "Mazda",
//     model: "CX-9",
//     type: "suv",
//     amount: 7,
//     price: 31520,
//     onSale: true,
//   },
//   {
//     make: "Toyota",
//     model: "4Runner",
//     type: "suv",
//     amount: 19,
//     price: 34210,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Sequoia",
//     type: "suv",
//     amount: 16,
//     price: 45560,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Tacoma",
//     type: "truck",
//     amount: 4,
//     price: 24320,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "F-150",
//     type: "truck",
//     amount: 11,
//     price: 27110,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Fusion",
//     type: "sedan",
//     amount: 13,
//     price: 22120,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Explorer",
//     type: "suv",
//     amount: 6,
//     price: 31660,
//     onSale: false,
//   },
// ];

// const makeCarsWithDiscount = (cars, discount) =>
//   cars.map((car) => {
//     car.price -= car.price * discount;
//     return car;
//   });

// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));

// const filterByPrice = (cars, threshold) =>
//   cars.filter((car) => car.price <= threshold);

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

// const getCarsWithDiscount = (cars) => cars.filter((car) => car.onSale === true);

// console.table(getCarsWithDiscount(cars));

// ## Example 6 - Метод find

// const getCarByModel = (cars, model) => cars.find((car) => car.modcar === model);

// console.log(getCarByModel(cars, "F-150"));
// console.log(getCarByModel(cars, "CX-9"));

// const sortByAscendingAmount = (cars) =>
//   cars.sort((a, b) => a.amount - b.amount);

// console.table(sortByAscendingAmount(cars));

// ## Example 9 - Метод sort

// const sortByModel = (cars, order) =>
//   cars.sort((a, b) => {
//     switch (order) {
//       case "asc":
//         return a.modcar.localeCompare(b.modcar);
//       case "desc":
//         return b.modcar.localeCompare(a.modcar);
//     }
//   });

// console.table(sortByModel(cars, "asc"));
// console.table(sortByModel(cars, "desc"));

// # Example 10 - Метод reduce

// const getTotalAmount = (cars) => cars.reduce((acc, car) => acc + car.amount, 0);

// console.log(getTotalAmount(cars));

// const getModelsOnSale = (cars) =>
//     cars.filter((car) => car.onSale === true)
//         .map((car) => car.modcar);

// console.table(getModelsOnSale(cars));
